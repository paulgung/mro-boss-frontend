import { AvatarDropdown, AvatarName, Footer } from '@/components';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
import gongshaoxu from './images/gongshaoxu.jpg'

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  // 初始化查询用户信息方法
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行查询用户信息方法
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    title: '工业品采购管理系统',
    token:{
      header: {
        colorBgHeader: '#071023',
        colorHeaderTitle: '#fff',
        colorTextMenu: '#dfdfdf',
        colorTextMenuSecondary: '#dfdfdf',
        colorTextMenuSelected: '#fff',
        colorBgMenuItemSelected: '#22272b',
        colorTextMenuActive: 'rgba(255,255,255,0.85)',
        colorTextRightActionsItem: '#dfdfdf',
      },
      colorTextAppListIconHover: '#fff',
      colorTextAppListIcon: '#dfdfdf',
      sider: {
        colorBgCollapsedButton: '#fff',
        colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
        colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
        colorMenuBackground: '#071023',
        colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
        colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
        colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
        colorMenuItemDivider: 'rgba(255,255,255,0.15)',
        colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
        colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
        colorTextMenuSelected: '#fff',
        colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
        colorTextMenu: 'rgba(255,255,255,0.75)',
        colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
        colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        colorTextMenuActive: 'rgba(255,255,255,0.95)',
        colorTextSubMenuSelected: '#fff',
      },
    },
    avatarProps: {
      src: gongshaoxu,  // initialState?.currentUser?.avatar
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};

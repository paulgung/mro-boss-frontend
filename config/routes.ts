export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './User/Login'
      }
    ],
  },
  {
    path: '/welcome',
    name: '首页',
    icon: 'home',
    component: './Welcome'
  },
  {
    path: '/opportunity',
    name: '商机管理',
    icon: 'desktop',
    routes: [
      {
        path: '/opportunity',
        redirect: '/opportunity/page1'
      },
      {
        path: '/opportunity/page1',
        name: '单位信息',
        component: './Opportunity/page1'
      },
      {
        path: '/opportunity/page2',
        name: '产品信息',
        component: './Opportunity/page2'
      },
      {
        path: '/opportunity/page3',
        name: '客户信息',
        component: './Opportunity/page3'
      },{
        path: '/opportunity/page4',
        name: '供应商信息',
        component: './Opportunity/page4'
      },
    ],
  },
  {
    path: '/inbound',
    name: '入库管理',
    icon: 'car',
    routes: [
      {
        path: '/inbound',
        redirect: '/inbound/page1'
      },
      {
        path: '/inbound/page1',
        name: '入库登记',
        component: './Inbound/page1'
      },
      {
        path: '/inbound/page2',
        name: '入库明细',
        component: './Inbound/page2'
      }
    ],
  },
  {
    path: '/outbound',
    name: '出库管理',
    icon: 'calculator',
    routes: [
      {
        path: '/outbound',
        redirect: '/outbound/page1'
      },
      {
        path: '/outbound/page1',
        name: '出库登记',
        component: './TableList'
      },
      {
        path: '/outbound/page2',
        name: '出库明细',
        component: './TableList'
      },
      {
        path: '/outbound/page3',
        name: '退货登记',
        component: './TableList'
      },{
        path: '/outbound/page4',
        name: '退货明细',
        component: './TableList'
      },
    ],
  },
  {
    path: '/loss',
    name: '损耗管理',
    icon: 'windows',
    routes: [
      {
        path: '/loss',
        redirect: '/loss/page1'
      },
      {
        path: '/loss/page1',
        name: '损耗登记',
        component: './TableList'
      },
      {
        path: '/loss/page2',
        name: '损耗明细',
        component: './TableList'
      }
    ],
  },
  {
    path: '/finance',
    name: '财务管理',
    icon: 'dollarCircle',
    routes: [
      {
        path: '/finance',
        redirect: '/finance/page1'
      },
      {
        path: '/finance/page1',
        name: '供商付款',
        component: './TableList'
      },
      {
        path: '/finance/page2',
        name: '收客户款',
        component: './TableList'
      },
      {
        path: '/finance/page3',
        name: '运费结算',
        component: './TableList'
      },{
        path: '/finance/page4',
        name: '单位信息',
        component: './TableList'
      }
    ],
  },
  {
    path: '/statistics',
    name: '统计汇总',
    icon: 'areaChart',
    // access: 'canAdmin',
    routes: [
      {
        path: '/statistics',
        redirect: '/statistics/page1'
      },
      {
        path: '/statistics/page1',
        name: '库存汇总',
        component: './TableList'
      },
      {
        path: '/statistics/page2',
        name: '供商汇总',
        component: './TableList'
      },
      {
        path: '/statistics/page3',
        name: '供商对账',
        component: './TableList'
      },
      {
        path: '/statistics/page4',
        name: '运输对账',
        component: './TableList'
      },
      {
        path: '/statistics/page5',
        name: '库存明细',
        component: './TableList'
      },
      {
        path: '/statistics/page6',
        name: '当前库存',
        component: './TableList'
      },
      {
        path: '/statistics/page7',
        name: '毛利汇总',
        component: './TableList'
      }
    ],
  },
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '*',
    layout: false,
    component: './404'
  },
];

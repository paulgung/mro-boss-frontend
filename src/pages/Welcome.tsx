import {PageContainer} from '@ant-design/pro-components';
import {Card, Col, Row, Timeline} from 'antd';
import React from 'react';
import {Column} from '@ant-design/plots';

// 柱状图
const DemoColumn = () => {
  const data = [
    {
      type: '一月',
      sales: 38,
    },
    {
      type: '二月',
      sales: 52,
    },
    {
      type: '三月',
      sales: 61,
    },
    {
      type: '四月',
      sales: 125,
    },
    {
      type: '五月',
      sales: 48,
    },
    {
      type: '六月',
      sales: 38,
    },
    {
      type: '七月',
      sales: 54,
    },
    {
      type: '八月',
      sales: 32,
    },
    {
      type: '九月',
      sales: 59,
    },
    {
      type: '十月',
      sales: 71,
    },
    {
      type: '十一月',
      sales: 28,
    },
    {
      type: '十二月',
      sales: 18,
    },
  ];
  const config = {
    data,
    height:300,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };

  // @ts-ignore
  return <Column {...config} />;
};

// 欢迎页面
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      {/*系统介绍*/}
      <div>
        <Card
          style={{
            borderRadius: 8,
          }}
        >
          <div>
            <div
              style={{
                fontSize: '22px',
              }}
            >
              欢迎使用工业品采购信息系统
            </div>
            <p
              style={{
                marginTop: 14,
                marginBottom: 32,
              }}
            >
              工业品采购管理系统可为企业提供从寻源到合同，采购到付款，以及供应商全生命周期管理等数字化采购解决方案，通过采购系统满足企业定制化非目录采购需求，实现流程自动化，极大提升MRO采购效率，减少人为干预，合规透明，采购流程简化，轻松解决企业MRO采购领域痛点，大大提升企业内部运转效率。
            </p>
          </div>
        </Card>
      </div>
      {/*跳转连接*/}
      <div style={{marginTop:'16px'}}>
        <Row gutter={16}>
          <Col span={16}>
            <Card title="访问量" style={{height:'400px'}}>
              <DemoColumn/>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="任务" style={{height:'400px'}}>
              <Timeline>
                <Timeline.Item color="green">商品寻源</Timeline.Item>
                <Timeline.Item color="green">询价对比</Timeline.Item>
                <Timeline.Item color="red">
                  <p>签合同</p>
                  <p>招标</p>
                </Timeline.Item>
                <Timeline.Item>供应商履约</Timeline.Item>
                <Timeline.Item>验收付款</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </div>

    </PageContainer>
  );
};

export default Welcome;

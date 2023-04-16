import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import React from 'react';

import { Gauge } from '@ant-design/plots';

const DemoGauge = () => {
  const config = {
    percent: 0.75,
    height: 200,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `库存量: ${(percent * 100).toFixed(0)}%`,

        style: {
          fontSize: '20px',
          lineHeight: '36px',
        },
      },
    },
  };
  return <Gauge {...config} />;
};

import { Waterfall } from '@ant-design/plots';

const DemoWaterfall = () => {
  const data = [
    {
      type: '日用品',
      money: 120,
    },
    {
      type: '伙食费',
      money: 900,
    },
    {
      type: '交通费',
      money: 200,
    },
    {
      type: '水电费',
      money: 300,
    },
    {
      type: '房租',
      money: 1200,
    },
    {
      type: '商场消费',
      money: 1000,
    },
    {
      type: '红包收入',
      money: -2000,
    },
  ];
  const config = {
    data,
    height: 400,
    xField: 'type',
    yField: 'money',
    appendPadding: [15, 0, 0, 0],
    meta: {
      type: {
        alias: '类别',
      },
      money: {
        alias: '收支',
        formatter: (v) => `${v} 元`,
      },
    },
    label: {
      style: {
        fontSize: 10,
        fill: 'rgba(0,0,0,0.65)',
      },
      layout: [
        {
          type: 'interval-adjust-position',
        },
      ],
    },
    total: {
      label: '总支出',
      style: {
        fill: '#96a6a6',
      },
    },
  };
  return <Waterfall {...config} />;
};
// 欢迎页面
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={10}>
          <Card title="库存汇总" style={{ height: '300px',width:'auto' }}>
            <DemoGauge />
          </Card>
        </Col>
        <Col span={14}>
          <Card title="库存汇总" style={{ height: '300px',width:'auto' }}>
            <DemoGauge />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col  span={24}>
          <Card title="库存汇总" style={{ height: '500px',marginTop:'20px' }}>
            <DemoWaterfall />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;

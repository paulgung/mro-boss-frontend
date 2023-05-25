import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import React from 'react';
import { Gauge } from '@ant-design/plots';
import { Waterfall } from '@ant-design/plots';

const InventoryAlert = () => {
  const config = {
    percent: 0.15,
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
        formatter: ({ percent }) => `预警量: ${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: '20px',
          lineHeight: '36px',
        },
      },
    },
  };
  return <Gauge {...config} />;
};


const DemoGauge2 = () => {
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


const DemoWaterfall = () => {
  const data = [
    {
      type: '螺丝刀',
      money: 120,
    },
    {
      type: '电钻',
      money: 900,
    },
    {
      type: '高速钻头',
      money: 200,
    },
    {
      type: '饰面板材',
      money: 300,
    },
    {
      type: '活动卡箍',
      money: 1200,
    },
    {
      type: '钻石砂轮',
      money: 1000,
    },
    {
      type: '电子天平',
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
        formatter: (v) => `${v} 个`,
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
      label: '总库存',
      style: {
        fill: '#96a6a6',
      },
    },
  };
  return <Waterfall {...config} />;
};
// 库存预警页面
const inventoryAlert: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={10}>
          <Card title="库存预警" style={{ height: '300px',width:'auto' }}>
            <InventoryAlert />
          </Card>
        </Col>
        <Col span={14}>
          <Card title="库存汇总" style={{ height: '300px',width:'auto' }}>
            <DemoGauge2 />
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

export default inventoryAlert;

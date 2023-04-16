import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import React from 'react';

import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: '螺丝',
      value: 22,
    },
    {
      type: '电线',
      value: 15,
    },
    {
      type: '电缆线',
      value: 18,
    },
    {
      type: '轴承',
      value: 15,
    },
    {
      type: '油漆',
      value: 10,
    },
    {
      type: '洗手液',
      value: 5,
    },
    {
      type: '螺丝刀',
      value: 10,
    },
    {
      type: '泵',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

// 欢迎页面
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="毛利汇总" style={{ height: '500px' }}>
            <DemoPie />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;

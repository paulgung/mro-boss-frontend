import { Column } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import React from 'react';

const DemoColumn = () => {
  const data = [
    {
      name: '采购金额',
      月份: 'Jan.',
      月均降雨量: 18.9,
    },
    {
      name: '采购金额',
      月份: 'Feb.',
      月均降雨量: 28.8,
    },
    {
      name: '采购金额',
      月份: 'Mar.',
      月均降雨量: 39.3,
    },
    {
      name: '采购金额',
      月份: 'Apr.',
      月均降雨量: 81.4,
    },
    {
      name: '采购金额',
      月份: 'May',
      月均降雨量: 47,
    },
    {
      name: '采购金额',
      月份: 'Jun.',
      月均降雨量: 20.3,
    },
    {
      name: '采购金额',
      月份: 'Jul.',
      月均降雨量: 24,
    },
    {
      name: '采购金额',
      月份: 'Aug.',
      月均降雨量: 35.6,
    },
    {
      name: '付款金额',
      月份: 'Jan.',
      月均降雨量: 12.4,
    },
    {
      name: '付款金额',
      月份: 'Feb.',
      月均降雨量: 23.2,
    },
    {
      name: '付款金额',
      月份: 'Mar.',
      月均降雨量: 34.5,
    },
    {
      name: '付款金额',
      月份: 'Apr.',
      月均降雨量: 99.7,
    },
    {
      name: '付款金额',
      月份: 'May',
      月均降雨量: 52.6,
    },
    {
      name: '付款金额',
      月份: 'Jun.',
      月均降雨量: 35.5,
    },
    {
      name: '付款金额',
      月份: 'Jul.',
      月均降雨量: 37.4,
    },
    {
      name: '付款金额',
      月份: 'Aug.',
      月均降雨量: 42.4,
    },
    {
      name: '采购欠款',
      月份: 'Jan.',
      月均降雨量: 12.4,
    },
    {
      name: '采购欠款',
      月份: 'Feb.',
      月均降雨量: 23.2,
    },
    {
      name: '采购欠款',
      月份: 'Mar.',
      月均降雨量: 34.5,
    },
    {
      name: '采购欠款',
      月份: 'Apr.',
      月均降雨量: 99.7,
    },
    {
      name: '采购欠款',
      月份: 'May',
      月均降雨量: 52.6,
    },
    {
      name: '采购欠款',
      月份: 'Jun.',
      月均降雨量: 35.5,
    },
    {
      name: '采购欠款',
      月份: 'Jul.',
      月均降雨量: 37.4,
    },
    {
      name: '采购欠款',
      月份: 'Aug.',
      月均降雨量: 42.4,
    },
  ];
  const config = {
    data,
    height: 400,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Column {...config} />;
};

// 欢迎页面
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="供商汇总" style={{ height: '500px' }}>
            <DemoColumn />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;

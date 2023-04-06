import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default Welcome;

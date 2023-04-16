import { addDataPage1, getDataPage4 } from '@/services/outbound';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { ProTable } from '@ant-design/pro-table';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';

type IInterface = {
  id: number;
};

const Index: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  const columns: ProColumns<IInterface>[] = [
    {
      title: '退货编号',
      hideInSearch: false,
      dataIndex: 'outboundId',
    },
    {
      title: '产品编号',
      ellipsis: true,
      dataIndex: 'productId',
      hideInSearch: false,
    },
    {
      title: '产品名称',
      ellipsis: true,
      dataIndex: 'productName',
      hideInSearch: true,
    },
    {
      title: '规格',
      dataIndex: 'standard',
      hideInSearch: true,
    },
    {
      title: '型号',
      dataIndex: 'type',
      hideInSearch: true,
    },
    {
      title: '单位',
      dataIndex: 'unit',
      hideInSearch: true,
    },
    {
      title: '退货数量',
      dataIndex: 'outboundNumber',
      hideInSearch: true,
    },
    {
      title: '退货单价',
      dataIndex: 'outboundPrice',
      hideInSearch: true,
    },
    {
      title: '退货金额',
      dataIndex: 'outboundTotal',
      hideInSearch: true,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      hideInSearch: true,
    },
  ];

  return (
    <PageContainer>
      <ProTable<IInterface>
        headerTitle="退货明细"
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async ({ rows = 10, current }) => {
          return getDataPage4({
            pageSize: rows,
            pageNo: current,
          }).then(
            (res: any) => {
              return {
                data: res.data?.data,
                success: res.data?.success,
                total: res.data?.total,
              };
            },
            (): any => {
              message.error('网络请求失败！');
              return {
                data: [],
                success: false,
                total: 0,
              };
            },
          );
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            新建
          </Button>,
        ]}
        editable={{
          type: 'multiple',
        }}
        rowKey="id"
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
      />
      <ModalForm
        labelCol={{ span: 4 }}
        title="新建数据"
        layout={'horizontal'}
        width="500px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await addDataPage1(value);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label="序号"
          width="md"
          name="id"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label="公司名称"
          width="md"
          name="company"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label="联系电话"
          width="md"
          name="phone"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label="联系人"
          width="md"
          name="name"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label="联系地址"
          width="md"
          name="address"
        />
        <ProFormText label="备注" width="md" name="remark" />
      </ModalForm>
    </PageContainer>
  );
};
export default Index;

import React, {useRef, useState} from 'react';
import {Button, message} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { ProTable } from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import {addDataPage1, getDataPage1} from '@/services/opportunity';
import {ModalForm, ProFormText} from "@ant-design/pro-components";

type IInterface = {
  id: number;
};

const Index: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  const columns: ProColumns<IInterface>[] = [
    {
      title: 'ID',
      hideInSearch: false,
      dataIndex: 'id',
    },
    {
      title: '公司名称',
      ellipsis: true,
      dataIndex: 'companyName',
      hideInSearch: false,
    },
    {
      title: '联系电话',
      ellipsis: true,
      dataIndex: 'phone',
      hideInSearch: true,
    },
    {
      title: '联系人',
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: '联系地址',
      dataIndex: 'address',
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
        headerTitle="单位信息"
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (search) => {
          const { rows = 10, current, id, companyName } = search;
          console.log(rows,current);
          return getDataPage1(
            {
              pageSize: rows,
              pageNo: current,
              id,
              companyName
            },
          ).then(
            (res: any) => {
              console.log('res',res);
              return {
                data: res.data?.data,
                success: res.data?.success,
                total: res.data?.total,
              };
            },
            ():any => {
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
        labelCol={{span:4}}
        title='新建数据'
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
          label='公司名称'
          width="md"
          name="companyName"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label='联系电话'
          width="md"
          name="phone"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label='联系人'
          width="md"
          name="name"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          label='联系地址'
          width="md"
          name="address"
        />
        <ProFormText
          label='备注'
          width="md"
          name="remark"
        />
      </ModalForm>
    </PageContainer>
  );
};
export default Index;

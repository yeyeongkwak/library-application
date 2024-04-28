import { Avatar, Breadcrumb, Button, Flex, Form, Input } from 'antd';
import React from 'react';
import { FieldNumberOutlined, UserOutlined } from '@ant-design/icons';
import { Container, InnerContainer, ItemCenterWrapper } from '../../../../styles/register';

export const RegisterUser = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Flex gap="middle" vertical justify={'center'}>
        <Flex justify={'center'} align={'center'} vertical>
          <Avatar size={100} icon={<UserOutlined />} style={{ backgroundColor: '#1677ff', marginBottom: '20px' }} />
          <Input
            style={{ width: '300px', marginBottom: '20px' }}
            size="large"
            placeholder="large size"
            prefix={'이름 '}
            // prefix={<UserOutlined />}
          />
          <Input
            style={{ width: '300px', marginBottom: '20px' }}
            size="large"
            placeholder="large size"
            prefix={'나이'}
            // prefix={<FieldNumberOutlined />}
          />
          <Button type="primary" size={'large'}>
            저장
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

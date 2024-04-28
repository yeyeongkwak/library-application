import { Avatar, Breadcrumb, Button, Dropdown, Flex, Input, MenuProps, Select, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { BookOutlined, DownOutlined, FieldNumberOutlined, UserOutlined } from '@ant-design/icons';
import { Container, InnerContainer, ItemCenterWrapper } from '../../../../styles/register';

export const RegisterBook = () => {
  const [isFocused, setIsFocused] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const items = [
    {
      label: '과학',
      value: 'SCIENCE'
    },
    {
      label: '사회',
      value: 'SOCIETY'
    },
    {
      label: '경제',
      value: 'ECONOMY'
    },
    {
      label: '컴퓨터',
      value: 'COMPUTER'
    },
    {
      label: '언어',
      value: 'LANGUAGE'
    }
  ];

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [status, setStatus] = useState<'' | 'error' | 'warning' | undefined>('');
  const [classification, setClassification] = useState('');

  const handleChange = (value: string) => {
    setClassification(value);
    if (value === '') {
      setStatus('error');
    } else {
      setStatus('');
    }
  };

  const handleClick = () => {
    if (classification === '') {
      setStatus('error');
    } else {
      setStatus('');
    }
  };
  const handleMouseOut = () => {
    if (!isClicked) {
      setIsFocused(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsFocused(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    console.log(event.target);
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      console.log('---out');
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  return (
    <>
      <Flex gap="middle" vertical justify={'center'}>
        <Flex justify={'center'} align={'center'} vertical>
          <Avatar size={100} icon={<BookOutlined />} style={{ backgroundColor: '#1677ff', marginBottom: '20px' }} />
          <div
            style={{
              display: 'flex',
              padding: '7px 11px',
              width: '350px',
              fontSize: '16px',
              lineHeight: '1.5',
              marginBottom: '20px',
              alignItems: 'center'
            }}
          >
            <span style={{ marginRight: '10px', textAlign: 'center' }}>이름</span>
            <Input
              style={{ width: '250px', marginBottom: '20px', alignItems: 'center' }}
              size="large"
              placeholder="large size"
            />
          </div>

          <div
            style={{
              display: 'flex',
              padding: '7px 11px',
              width: '350px',
              fontSize: '16px',
              lineHeight: '1.5',
              marginBottom: '20px',
              alignItems: 'center'
            }}
          >
            <span style={{ marginRight: '10px' }}>분류</span>
            <Select
              placeholder="분류를 선택해주세요"
              size={'large'}
              onChange={handleChange}
              style={{ width: 250 }}
              options={items}
              onBlur={handleClick}
              status={status}
            />
          </div>
          <Button type="primary" size={'large'}>
            저장
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

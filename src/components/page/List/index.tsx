import React from 'react';
import { Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

export const List = () => {
  const navigate = useNavigate();

  return (
    <Flex gap="middle" justify={'space-evenly'} align={'flex-start'}>
      <div onClick={() => navigate('/user/list')}>사용자 목록</div>
      <div onClick={() => navigate('/book/list')}>도서 목록</div>
    </Flex>
  );
};

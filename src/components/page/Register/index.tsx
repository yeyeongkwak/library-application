import React from 'react';
import { RegisterUser } from './user/RegisterUser';
import { RegisterBook } from './book/RegisterBook';
import { Col, Flex, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Flex gap="middle" justify={'space-evenly'} align={'flex-start'}>
      <div onClick={() => navigate('/user/register')}>사용자 등록</div>
      <div onClick={() => navigate('/book/register')}>도서 등록</div>
      {/*<RegisterUser />*/}
      {/*<RegisterBook />*/}
    </Flex>
    // <div>
    //   <RegisterUser />
    //   <RegisterBook />
    // </div>
  );
};

import React from 'react';
import { Avatar, Card, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BookOutlined, UserAddOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const LoanList = () => {
  const navigate = useNavigate();

  // 호버 시 변경될 테두리 색상
  const hoverBorderColor = '#1890ff';

  // 기본 카드 스타일
  const StyledCard = styled(Card)`
    transition: border-color 0.3s; // 호버 시 테두리 색상이 부드럽게 변경되도록 transition 추가
    border: 1px solid #d9d9d9;
    background-color: white;
    width: 300px;
    min-height: 500px;
    text-align: center;

    &:hover {
      .avatar-user {
        background-color: #1677ff;
      }
      .avatar-book {
        background-color: #1677ff;
      }
      border-color: ${hoverBorderColor}; // 호버 시 테두리 색상 변경
    }
  `;

  return (
    <Flex gap="middle" justify={'space-evenly'} align={'flex-start'}>
      <div>
        <StyledCard
          styles={{ header: { borderBottom: 0, height: '300px' } }}
          onClick={() => navigate('/book/loan')}
          title={
            <Avatar
              className={'avatar-user'}
              style={{ width: '100px', height: '100px' }}
              size={'large'}
              icon={<UserAddOutlined size={100} />}
            />
          }
          bordered={true}
        >
          <p style={{ fontWeight: 'bold' }}>대출하기</p>
        </StyledCard>
      </div>

      <StyledCard
        styles={{ header: { borderBottom: 0, height: '300px' } }}
        onClick={() => navigate('/user/register')}
        title={
          <Avatar
            className={'avatar-book'}
            style={{ width: '100px', height: '100px' }}
            size={'large'}
            icon={<BookOutlined size={100} />}
          />
        }
        bordered={true}
      >
        <p style={{ fontWeight: 'bold' }}>반납하기</p>
      </StyledCard>

      {/*<RegisterUser />*/}
      {/*<RegisterBook />*/}
    </Flex>
    // <div>
    //   <RegisterUser />
    //   <RegisterBook />
    // </div>
  );
};

import React from 'react';
import { Avatar, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import { StyledCard } from '../../../styles/common';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
export const Register = () => {
  const navigate = useNavigate();

  return (
    <Flex gap="middle" justify={'space-evenly'} align={'flex-start'}>
      <div>
        <StyledCard
          styles={{ header: { borderBottom: 0, height: '300px' } }}
          onClick={() => navigate('/user/register')}
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
          <p style={{ fontWeight: 'bold' }}>사용자 등록</p>
        </StyledCard>
      </div>
      <div>
        <StyledCard
          styles={{ header: { borderBottom: 0, height: '300px' } }}
          onClick={() => navigate('/book/register')}
          title={
            <Avatar
              className={'avatar-book'}
              style={{ width: '100px', height: '100px' }}
              size={'large'}
              icon={<BookmarkAddSharpIcon style={{ width: 200 }} />}
            />
          }
          bordered={true}
        >
          <p style={{ fontWeight: 'bold' }}>도서 등록</p>
        </StyledCard>
      </div>
    </Flex>
  );
};

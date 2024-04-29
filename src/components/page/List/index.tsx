import React from 'react';
import { Avatar, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';
import BookSharpIcon from '@mui/icons-material/BookSharp';
import { StyledCard } from '../../../styles/common';
import PersonIcon from '@mui/icons-material/Person';
export const List = () => {
  const navigate = useNavigate();

  return (
    <Flex gap="middle" justify={'space-evenly'} align={'flex-start'}>
      <div>
        <StyledCard
          styles={{ header: { borderBottom: 0, height: '300px' } }}
          onClick={() => navigate('/user/list')}
          title={
            <Avatar
              className={'avatar-user'}
              style={{ width: '100px', height: '100px' }}
              size={'large'}
              icon={<UserOutlined size={200} />}
            />
          }
          bordered={true}
        >
          <p style={{ fontWeight: 'bold' }}>사용자 목록</p>
        </StyledCard>
      </div>
      <div>
        <StyledCard
          styles={{ header: { borderBottom: 0, height: '300px' } }}
          onClick={() => navigate('/book/list')}
          title={
            <Avatar
              className={'avatar-user'}
              style={{ width: '100px', height: '100px' }}
              size={'large'}
              icon={<BookSharpIcon style={{ width: 200 }} />}
            />
          }
          bordered={true}
        >
          <p style={{ fontWeight: 'bold' }}>도서 목록</p>
        </StyledCard>
      </div>
    </Flex>
  );
};

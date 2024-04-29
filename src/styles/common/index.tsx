import styled from 'styled-components';
import { Card } from 'antd';

// 호버 시 변경될 테두리 색상
const hoverBorderColor = '#1890ff';

//
export const StyledCard = styled(Card)`
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

import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { loanReturnHistory } from '../../../../api/book/book-api';
import { getUserList } from '../../../../api/user/user-api';

export const LoadReturnList = () => {
  const [data, setData] = useState<any>([]);

  console.log(data);
  const dataSources =
    data.length > 0 &&
    data.map((d: any) => {
      return {
        name: d.name,
        bookName: d.books[0].name,
        isReturn: d.books[0].isReturn ? '반납완료' : '대출중'
      };
      // books: { name: d.books[0].name, isReturn: d.books[0].isReturn }
    });
  const AlignType = 'left' || 'center' || 'right';

  const columns = [
    {
      title: '이름',
      dataIndex: 'name',
      width: '40%',
      ellipsis: true,
      align: 'center' as typeof AlignType
    },
    {
      title: '책이름',
      dataIndex: 'bookName',
      width: '30%', // 전체 너비의 30%,
      align: 'center' as typeof AlignType
    },
    {
      title: '대여상태',
      dataIndex: 'isReturn',
      align: 'center' as typeof AlignType,
      width: '30%'
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await loanReturnHistory();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>{data && data.length > 0 ? <Table dataSource={dataSources} pagination={false} columns={columns} /> : <></>}</>
  );
};

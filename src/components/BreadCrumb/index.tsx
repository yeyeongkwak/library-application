import { Breadcrumb } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const BreadCrumb = () => {
  const routerLocation = useLocation();
  const isBaseUrl = ['/register', '/history', '/list'];

  const breadCrumbMenus = [
    [
      {
        firstStep: '등록하기',
        secondStep: '사용자',
        url: '/user/register',
        href: '/register'
      },
      {
        firstStep: '등록하기',
        secondStep: '도서',
        url: '/book/register',
        href: '/register'
      }
    ]
  ];
  const breadCrumbMenu = [
    {
      firstStep: '등록하기',
      secondStep: '사용자',
      url: '/user/register',
      baseUrl: '/register'
    },
    {
      firstStep: '등록하기',
      secondStep: '도서',
      url: '/book/register',
      baseUrl: '/register'
    },
    {
      firstStep: '목록',
      secondStep: '사용자 목록',
      url: '/user/list',
      baseUrl: '/list'
    },
    {
      firstStep: '목록',
      secondStep: '도서 목록',
      url: '/book/list',
      baseUrl: '/list'
    }
  ];

  const exactMenus = breadCrumbMenus.find(submenu => submenu.some(item => item.url === routerLocation.pathname));

  console.log(exactMenus);
  const exactMenu = breadCrumbMenu.find(b => b.url === routerLocation.pathname);
  return (
    <Breadcrumb style={{ margin: '16px' }} separator=">" items={[]}>
      <Breadcrumb.Item href={exactMenu?.baseUrl}>{exactMenu?.firstStep}</Breadcrumb.Item>
      <Breadcrumb.Item>{exactMenu?.secondStep}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

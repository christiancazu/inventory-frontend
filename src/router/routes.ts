import React from 'react';

export const routes: Array<object> = [
  {
    path: '/',
    component:  React.lazy(() => import('../app/dashboard')),
    exact: true,
  },
  {
    path: '/login',
    component:  React.lazy(() => import('../app/auth')),
    exact: true,
  },
];

import HomePage from './pages/HomePage';
import React from 'react';
import UserListPage from './pages/UserListPage'

const Routes = [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UserListPage,
    path: '/users',
  }
]

export default Routes
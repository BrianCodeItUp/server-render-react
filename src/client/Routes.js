import UserList, { loadData } from './components/UserList';

import Home from './components/Home';
import React from 'react';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    loadData,
    path: '/users',
    component: UserList
  }
]

export default Routes
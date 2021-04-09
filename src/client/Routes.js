import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import UserListPage from './pages/UserListPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UserListPage,
        path: '/users',
      },
      {
        // Without define the path, React Router will decide to show this component if it can't not match any other routes. 
        ...NotFoundPage,
      }
    ]
  }
]
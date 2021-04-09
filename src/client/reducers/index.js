import adminsReducer from './adminsReducer';
import authReducer from './authReducer'
import { combineReducers } from 'redux';
import usersReducer from './usersReducer'

export default combineReducers({
  admins: adminsReducer,
  users: usersReducer,
  auth: authReducer
});

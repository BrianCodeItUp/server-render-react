export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, _, api) =>{
  const res = await api.get('/users');
  dispatch({ 
    type: FETCH_USERS,
    payload: res
  })
} 

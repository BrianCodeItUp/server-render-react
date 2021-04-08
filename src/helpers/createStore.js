import { applyMiddleware, createStore } from 'redux';

import axios from 'axios';
import reducers from '../client/reducers';
import thunk from 'redux-thunk';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'https://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  })
  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
}

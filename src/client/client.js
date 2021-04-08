import 'babel-polyfill';

import { applyMiddleware, createStore } from 'redux'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes'
import axios from 'axios';
import reducers from './reducers'
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(reducers, JSON.parse(window.INITIAL_STATE), applyMiddleware(thunk.withExtraArgument(axiosInstance)));

// Start up point for the client side application
ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
    , document.getElementById('root')
)
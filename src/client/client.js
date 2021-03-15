import 'babel-polyfill';

import { applyMiddleware, createStore } from 'redux'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes'
import reducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk));
console.log(store.getState())
// Start up point for the client side application
ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
    , document.getElementById('root')
)
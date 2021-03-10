import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes'

// Start up point for the client side application
ReactDom.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
, document.getElementById('root'))
import Home from './components/Home';
import React from 'react';
import ReactDom from 'react-dom';

// Start up point for the client side application
ReactDom.hydrate(<Home />, document.getElementById('root'))
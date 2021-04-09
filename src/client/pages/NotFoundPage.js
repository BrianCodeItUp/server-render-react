import React from 'react';

// staticContext prop is passed in when the component renders at server side
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return <h1>Ooops, route not found.</h1>
}

export default {
  component: NotFoundPage
}
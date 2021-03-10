import React from 'react';
import Routes from '../client/Routes'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server';

export default (path) => {
  const content = renderToString(
    <StaticRouter location={path} content={{}}>
      <Routes />
    </StaticRouter>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
import { Provider } from 'react-redux';
import React from 'react';
import Routes from '../client/Routes'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server';

export default (path, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} content={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
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

import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import React from 'react';
import Routes from '../client/Routes'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

export default (path, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@materializecss/materialize@1.0.0/dist/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(JSON.stringify(store.getState()))}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

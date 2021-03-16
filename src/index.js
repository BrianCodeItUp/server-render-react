import 'babel-polyfill';

import Routes from './client/Routes';
import createStore from './helpers/createStore'
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer'

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore()
  
  const promises = matchRoutes(Routes, req.path).map(({ route }) => { 
    return route.loadData ? route.loadData(store) : null
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req.path, store));  
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})


import 'babel-polyfill';

import createStore from './helpers/createStore'
import express from 'express';
import renderer from './helpers/renderer'

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore()

  // Logic to initialize and load data into the store

  res.send(renderer(req.path, store));
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})


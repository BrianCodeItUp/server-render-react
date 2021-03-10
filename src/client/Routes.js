import Home from './components/Home'
import React from 'react';
import { Route } from 'react-router-dom'

const Routes = () => {
  return (
    <div> 
      <Route exact path='/' component={Home} />
    </div>
  )
}

export default Routes
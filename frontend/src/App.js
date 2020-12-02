import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;

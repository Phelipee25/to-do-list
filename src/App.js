import React from 'react';
import './css/App.css'
import Task from './pages/Tasks'
import Register from './pages/Register'
import Login from './pages/Login'
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className='container'>
      <Switch>
      <Route exact path="/" component={Task}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;

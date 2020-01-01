import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './LoginPage/Login'
import Register from './RegisterPage/Register'
import Header from './Header/Header'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;

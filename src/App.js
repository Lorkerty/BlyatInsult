import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './LoginPage/Login'
import Register from './RegisterPage/Register'
import Header from './Header/Header'
import './index.css'
import Musique from './MusiquePage/Musique';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/musiquePage" component={Musique}/>
        </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;

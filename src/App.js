import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './LoginPage/Login'
import Register from './RegisterPage/Register'
import Header from './Header/Header'
import ComposersList from './ComposersList/ComposersList'
import './index.css'
import Musique from './MusiquePage/Musique';
import ImageSlider from './ImageSlider/ImageSlider';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/musiquePage" component={Musique}/>
          <Route exact path ="/compList" component={ComposersList} />
          <Route exact path="/imageSlider" component={ImageSlider} />
        </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;

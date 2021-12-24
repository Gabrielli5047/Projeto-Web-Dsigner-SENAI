import Home from './pags/Home/home'
import React from "react";
import Login from './pags/Login/Login'
import Cadastro from './pags/Cadastro/cadastro'
import Contacts from './pags/Contacts/contato'
import DepTudo from './pags/depTUDO'
import FotosVideos from './pags/FotosVideos';

import './App.css'

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/contato" component={Contacts} />
        <Route path="/fotosVideos" component={FotosVideos} />
        <Route path="/home" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/tudo" component={DepTudo} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

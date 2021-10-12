import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon";
import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Captured from './components/pokemon/Captured';
import BackgroundImg from './img/background.png';
import styled from 'styled-components';
import axios from 'axios';




const MainImg = styled.img`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -5;
    min-height: 200px;
    position: fixed;
`

const MainImgCover = styled.div`
  &::before {
    z-index: -4;
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-box-shadow: inset 0px -500px 300px -29px rgba(0,0,0,0);
    -moz-box-shadow: inset 0px -500px 300px -29px rgba(0,0,0);
    
  } 
`


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainImgCover>
          <MainImg src={BackgroundImg} />
        </MainImgCover>
      <div className="container">
        <Switch>
        <Route path="/pokemon/:pokemonIndex" component={Pokemon} />
        <Route path="/captured">
          <Captured/>
        </Route>
          <Dashboard />
        </Switch>
      </div>
    </div>
  );
}



export default App;

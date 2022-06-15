import React from 'react';
import ReactDom from 'react-dom'
import {HashRouter} from "react-router-dom"
import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Images from './Images.js'; 
import Favorites from './Favorites';

function App() {

  return (
    <div >
      <Nav />
      <h1 >
        Vincent van Gogh Collection in the Metropolitan Museum of Art 
      </h1>
      
      <Images />
      <Favorites/>
    </div>
  );
}

export default App;

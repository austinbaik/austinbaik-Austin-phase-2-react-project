import React from 'react';
import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Images from './Images.js'

function App() {

  return (
    <div>
      <h1 className='.App-header'>
        Hello
      </h1>
      <Nav />
      <Images />
    </div>
  );
}

export default App;

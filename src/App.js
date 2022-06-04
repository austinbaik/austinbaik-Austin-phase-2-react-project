import React from 'react';
import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Images from './Images.js'

function App() {

  const [imagesAPI, setImagesAPI] = useState([])

  function updateState(data) {
    setImagesAPI(data)
  }

  return (
    <div>
      <h1 className='.App-header'>
        Hello
      </h1>
      <Nav />
      <Images updateState={updateState} imageArray={imagesAPI} />
    </div>
  );
}

export default App;

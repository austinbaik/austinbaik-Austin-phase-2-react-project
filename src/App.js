import React from 'react';
import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Images from './Images.js'

function App() {

  const [imagesAPI, setImagesAPI] = useState()

  function handleAPIResp(data){
    console.log("data", data)
    setImagesAPI(data)
  } 
  console.log("images", imagesAPI)

   return (
    <div className="App-header">
      <Nav/>
      <Images handleAPIResp={handleAPIResp} imageArray={imagesAPI}/>
    </div>
  );
}

export default App;

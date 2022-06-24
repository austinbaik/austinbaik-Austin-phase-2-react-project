import React from 'react';
import ReactDom from 'react-dom'
import { Switch, Route } from "react-router-dom"
import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Images from './Images.js';
import Favorites from './Favorites';

function App() {
  const [page, setPage] = useState("/")

  
  return (
    <div >
      <Nav onChangePage={setPage}/>
      <h1 >
        Vincent van Gogh Collection in the Metropolitan Museum of Art
      </h1>
      <Switch>
        <Route path="/images">
          <Images />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import { Switch, Route } from "react-router-dom"
// import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Home from './Home';
import Images from './Images.js';
import Favorites from './Favorites';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Nav/>
          

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}















// function App() {
  
  
  
  
  
  //   const [page, setPage] = useState("/")


//   return (
//     <div >
//       <Nav onChangePage={setPage}/>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/images">
//           <Images />
//         </Route>
//         <Route path="/favorites">
//           <Favorites />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;

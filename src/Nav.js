// import React from 'react';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
 
    return(
    <div className='nav'>
      <Link className="navBarLink" to="/">HOME</Link>

      <Link className="navBarLink" to="/images">IMAGES</Link>
    
      <Link className="navBarLink" to="/favorites">FAVORITES</Link>
  </div>
    )
}

export default Nav;


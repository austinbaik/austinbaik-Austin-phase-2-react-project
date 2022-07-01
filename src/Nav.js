// import React from 'react';
import './index.css'
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
      <Link className="navBarLink" to="/">Home</Link>

      <Link className="navBarLink" to="/images">Images</Link>
    
      <Link className="navBarLink" to="/favorites">Favorites</Link>
  </div>
    )
}

export default Nav;


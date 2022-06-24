import React from 'react';
import './index.css'

function Nav({ onChangePage }) {
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <nav>
            <a onClick={handleLinkClick} href="/images">Images</a>
            <a onClick={handleLinkClick} href="/favorites">Favorites</a>
            {/* <a onClick={handleLinkClick} href="/projects">Projects</a> */}
        </nav>
    );
}

export default Nav;


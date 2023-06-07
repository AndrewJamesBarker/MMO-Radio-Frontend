import {Link} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function NavFooter() {
  return (
    <nav className="nav-flex-container" >
   
   <div id="footer-menu">
    <ul>
        <Link to="/" className="nav-link">RADIO</Link>
        <Link to="/About" className="nav-link">ABOUT</Link>
        {/* <Link to="/contact" className="nav-link">CONTACT</Link> */}
      </ul>
   </div>

    </nav>
  );
}
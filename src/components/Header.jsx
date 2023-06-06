import {Link} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from "./Nav";


export default function Header() {
  return (
    <header className="flex-container" id="header">  
    <Nav />
    </header>
  );
}
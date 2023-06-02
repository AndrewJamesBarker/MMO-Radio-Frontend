import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className='widthControl flex-container'>
     


      <small id="copywrite">All rights reserved © MMO-Radio {currentDate}</small>
    </footer>
  )

}
import React from 'react'
import {useState, useEffect} from "react";
import ReactDOM from 'react-dom/client'
import AudioPlayer from './AudioPlayer';

export default function MainBody() {
  return (
    <div>
      <main className='widthControl basic-container' id="main">
        <h1>Welcome to <span className='orange-text'>BRICK</span><span className='red-text'>MMO</span> Radio</h1>
        <div className='player-container'>
          <AudioPlayer />
        </div>
      </main>
    </div>
  
  )

}
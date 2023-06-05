import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import HostData from './hostData';

export default function MainBody() {
 
  return (
    <div>
      <main className='widthControl basic-container' id='main'>
        <h1>
          Welcome to <span className='orange-text'>BRICK</span>
          <span className='red-text'>MMO</span> Radio
        </h1>
        <div className='player-container'>
          <AudioPlayer />
          <HostData />
        </div>
      </main>
    </div>
  );
}

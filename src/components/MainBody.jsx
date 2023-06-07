import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import HostData from './hostData';
import SegmentData from './segmentData';

export default function MainBody() {
 
  return (
    <div>
      <main className='basic-container' id='main'>
        <h1 className='main-title'>
          Welcome to <span className='orange-text'>BRICK</span>
          <span className='red-text'>MMO</span> Radio!
        </h1>
        <p>Streaming live, now!</p>
        <div className='player-container'>
          <AudioPlayer />
          <SegmentData />
          <HostData />
        </div>
      </main>
    </div>
  );
}

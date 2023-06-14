
import dotenv from 'dotenv';
import React, { useState, useEffect, useRef } from 'react';

// Retrieve and play audio content from producer back end CMS, via icecast

// Also, retieve data from icecast regarding meta data from the stream. 
// currently grabbing the amount of active listeners, and the title of what is currently 
// playing.

// potential url variables from api endpoints (in .env)

// const streamStatsURL = process.env.REACT_APP_STREAM_DATA;
// const audioStreamURL = process.env.REACT_APP_AUDIO_STREAM;


// http://singhmansingh.games:8000/brickmmo-radio.mp3


const AudioPlayer = () => {
  const audioUrl = 'http://singhmansingh.games:8000/brickmmo-radio.mp3'
  const dataUrl = 'http://singhmansingh.games:8000/status-json.xsl'
  const audioRef = useRef(null);
  const [metadata, setMetadata] = useState(null);
  const [listenerCount, setListenerCount] = useState(null);
  const [trackTitle, setTracktitle] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(fetchAudioMetaData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  const fetchAudioMetaData = async () => {
    try {
      const response = await fetch(dataUrl);
      const data = await response.json();
      const listeners = data.icestats.source.listeners;
      const title = data.icestats.source.title;

      setListenerCount(listeners);
      setTracktitle(title);

    } catch (error) {
      console.error('error fetching audo data', error);
    }
  }
// this function woyld be for retrieving some metadata directly from within the stream itself,
// not the alternate api endpoint currently in use 

  // const fetchPlayerMetaData = async () => {
    
  // }
  
  return (
    <div className="basic-container player-container">
      <audio ref={audioRef} controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
      <p>
        <span className='orange-text'>Now Playing:</span> {trackTitle}
        </p>
        <p>
        <span className='orange-text'>Listener Count:</span> {listenerCount}
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;

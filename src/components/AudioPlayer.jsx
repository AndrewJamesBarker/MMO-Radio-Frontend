
import dotenv from 'dotenv';
import React, { useState, useEffect, useRef } from 'react';
// retrieve and play audio content from producer back endianness, via icecast

// const streamStatsURL = process.env.REACT_APP_STREAM_DATA;
// const audioStreamURL = process.env.REACT_APP_AUDIO_STREAM;


// http://singhmansingh.games:8000/brickmmo-radio.mp3


const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    // Add event listener for the 'loadedmetadata' event
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Clean up the event listener when the component is unmounted
    return () => {
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const handleLoadedMetadata = () => {
    // Access the duration and metadata properties of the audio element
    setDuration(audioRef.current.duration);
    setMetadata(audioRef.current.metadata);
  };

  return (
    <div className="basic-container player-container">
      <audio ref={audioRef} controls>
        <source src="http://singhmansingh.games:8000/brickmmo-radio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
        {/* Duration: {duration} seconds */}
      </div>
      <div>
        {/* Metadata: {metadata} */}
      </div>
    </div>
  );
};

export default AudioPlayer;

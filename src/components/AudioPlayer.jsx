import React from 'react';
import dotenv from 'dotenv';

// retireve and play audio content from producer back endianness, via icecast

const AudioPlayer = () => {
// const streamStatsURL = process.env.REACT_APP_STREAM_DATA;
// const audioStreamURL = process.env.REACT_APP_AUDIO_STREAM;

  return (
    <div className="basic-container player-container">
      <audio controls>
        <source src='http://singhmansingh.games:8000/brickmmo-radio.mp3' type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

// http://singhmansingh.games:8000/brickmmo-radio.mp3

export default AudioPlayer;

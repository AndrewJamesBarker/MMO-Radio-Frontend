import React from 'react';

const AudioPlayer = () => {
  return (
    <audio controls>
      <source src="http://singhmansingh.games:8000/brickmmo-radio.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;

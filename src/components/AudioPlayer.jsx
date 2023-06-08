import React from 'react';

const AudioPlayer = () => {
  return (
    <div className="basic-container player-container">
      <audio controls>
        <source src="audio/before_the_world.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;

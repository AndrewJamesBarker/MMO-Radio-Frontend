import React from 'react';

const AudioPlayer = () => {
  return (
    <audio controls>
      <source src="audio_file.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;

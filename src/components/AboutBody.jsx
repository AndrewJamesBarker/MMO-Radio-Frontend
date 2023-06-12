import AudioPlayer from "./AudioPlayer";

// lego radio station image from https://brickative.shoplo.com/en_GB/p/Radio-Station/151

export default function AboutBody() {
  return (
      <div>
        <main className='basic-container' id='main'>
          <h1 className='main-title'>
            Welcome to <span className='orange-text'>BRICK</span>
            <span className='red-text'>MMO</span> Radio!
          </h1>
          <p>Streaming live, now!</p>
          <img className="station-image" src="images/radioStation.png" width='300' alt='image of a lego radiostation'></img>
          <h2>Andrew Barker</h2>
          <p className='maker-bio'>Andrew Barker is a Web developer, musician, and proud Brick-MMO Radio web application co-creator.  Combining music and development, Brick-MMO Radio merges two of Andrew’s favourite subjects, making him the ideal person to ensure Brick-MMO Radio’s listeners the best Web Radio experience possible.</p>
        </main>
      </div>
    );
  }

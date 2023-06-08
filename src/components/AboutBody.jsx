import AudioPlayer from "./AudioPlayer";

export default function AboutBody() {
  return (
      <div>
        <main className='basic-container' id='main'>
          <h1 className='main-title'>
            Welcome to <span className='orange-text'>BRICK</span>
            <span className='red-text'>MMO</span> Radio!
          </h1>
          <p>Streaming live, now!</p>
          <div className='player-container'>
          </div>
        </main>
      </div>
    );
  }

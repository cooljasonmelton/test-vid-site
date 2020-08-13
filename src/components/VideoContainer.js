import React from 'react';
import '../App.css';


const VideoContainer = () => {
  return (
    <div className="VideoContainer window" >
        <div className="title-bar">
          <div className="title-bar-text"> Operation Samurai Eagle </div>
          <div className="title-bar-controls">
            <button>C</button>
            <button>M</button>
            <button>J</button>
          </div>
        </div>

      <div className="cfb">
        <iframe width="1440" 
          height="524" 
          src="https://www.youtube.com/embed/w7fLe0prRa0" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

    </div>
  );
}

export default VideoContainer;

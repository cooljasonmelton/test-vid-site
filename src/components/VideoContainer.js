import React from 'react';
import '../App.css';
import '../../node_modules/98.css/style.css'


const VideoContainer = () => {
  return (
    <div className="VideoContainer cfb">

      <iframe width="1440" 
        height="524" 
        src="https://www.youtube.com/embed/w7fLe0prRa0" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

      </iframe>

    </div>
  );
}

export default VideoContainer;

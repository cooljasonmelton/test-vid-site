import React from 'react';
import '../App.css';
import hawkstorm from './hawkstorm-global.mp4';


const VideoContainer = () => {
  return (
    <div className="VideoContainer cfb">

        <video className="da-video" 
            width="320" 
            height="240" 
            preload 
            controls>
            
            <source src={hawkstorm} type="video/mp4"/>

            Your browser does not support the video tag.
        </video>

    </div>
  );
}

export default VideoContainer;

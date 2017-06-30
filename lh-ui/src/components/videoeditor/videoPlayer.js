import React,{Component} from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

class VideoPlayer extends Component{

  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
      <div>
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    );
  }
}

export default VideoPlayer;

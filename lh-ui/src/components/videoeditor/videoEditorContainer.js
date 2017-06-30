import React,{Component} from 'react';
import VideoPlayer from "./videoPlayer";
import VideoStoreContainer from "./videoStore";

class VideoEditorContainer extends Component{

  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
      <div className="column">
        <div className="col-md-6">
          <VideoPlayer/>
        </div>
        <div className="col-md-6">
          <VideoStoreContainer/>
        </div>
      </div>
    );
  }
}

export default VideoEditorContainer;

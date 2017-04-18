import React, { Component } from "react";
import Webcam from "react-webcam";
import { Button } from "semantic-ui-react";

class Step3 extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      screenshot: null
    };
    this.screenshot = this.screenshot.bind(this);
  }

  screenshot() {
    const screenshot = this.refs.webcam.getScreenshot();
    this.setState({ screenshot: screenshot });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <Webcam ref="webcam" audio={false} height={400} width={600} />

        <div>
          <h2>Captured Image [temp]</h2>
          <div className="screenshots">
            <div className="controls">
              <Button onClick={this.screenshot} secondary>Capture</Button>
            </div>
            {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Step3;

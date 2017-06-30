import React, { Component } from 'react';
import IO from 'socket.io-client';
import LC from 'literallycanvas';
import { Card } from 'semantic-ui-react';
import LiterallyCanvas from 'literallycanvas/lib/js/core/LiterallyCanvas';
import defaultOptions from 'literallycanvas/lib/js/core/defaultOptions';



class WhiteboardContainer extends Component{
  constructor (props) {
    super(props)

    defaultOptions.backgroundColor = '#fff'
    defaultOptions.imageURLPrefix = '/lib/img'
    defaultOptions.toolbarPosition= 'bottom'
    this.lc = new LiterallyCanvas(defaultOptions)
    this.lc.on('shapeSave', (shape) => {
      localStorage.setItem('shape', LC.shapeToJSON(shape.shape));
    })

  }

  render () {
    return (
      <Card style={{width:'100%'}}>
        <LC.LiterallyCanvasReactComponent
          lc={this.lc}
        />
      </Card>
    );
  }


}
export default WhiteboardContainer;

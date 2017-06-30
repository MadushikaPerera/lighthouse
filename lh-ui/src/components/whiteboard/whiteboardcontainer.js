import React,{Component} from 'react';
import fastclick from 'fastclick';
import '../../lib/css/literallycanvas.css';
import {LiterallyCanvasReactComponent} from '../../lib/js/literallycanvas';


class WhiteboardContainer extends Component{

  constructor(){
    super();
    this.state={
            isSetUp: true,
            svgText: "",
            lcOptions: {
                backgroundImage: null,
                toolbarPosition: 'top',
                snapshot: JSON.parse(localStorage.getItem('drawing')),
                onInit: this.onInit,
                imageURLPrefix: "lib/img"
            }
        };
  }

  onInit = (lc) => {
    this.lc = lc;
    lc.on('drawingChange', this.save);
    lc.on('pan', this.save);
    lc.on('zoom', this.save);
    this.save();
  }

  save = () => {
    localStorage.setItem('drawing', JSON.stringify(this.lc.getSnapshot()));
    this.setState({svgText: this.lc.getSVGString()});
  }

  getVectors = () => {
    localStorage.setItem('vectors', JSON.stringify(this.lc.getSnapshot()));
    this.setState({svgText: this.lc.getSVGString()});
  }

  actionOpenImage = () => {
    window.open(this.lc.getImage({
      // rect: {x: 0, y: 0, width: 100, height: 100}
      scale: 1, margin: {top: 10, right: 10, bottom: 10, left: 10}
    }).toDataURL());
  }

  actionChangeSize = () => {
    this.lc.setImageSize(null, 200)
  }

  actionSetUp = () => {
    this.setState({isSetUp: true});
  }

  actionTearDown = () => {
    this.setState({isSetUp: false});
  }

  render(){
    return(
      <div>
        {this.state.isSetUp && <LiterallyCanvasReactComponent {...this.state.lcOptions} />}
      </div>
    );
  }

}

export default WhiteboardContainer;

import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import io from 'socket.io-client';
import { Dropdown, Menu } from 'semantic-ui-react'


import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/theme/eclipse';
import 'brace/theme/ambiance';
import 'brace/theme/chaos';


const themeoptions = [
  { key: 1, text: 'github', value: 'github' },
  { key: 2, text: 'ambiance', value: 'ambiance' },
  { key: 3, text: 'chaos', value: 'chaos'},
];

const modeoptions = [
  { key: 1, text: 'javascript', value: 'javascript' },
  { key: 2, text: 'c_cpp', value: 'c_cpp' },
  { key: 4, text: 'coffee', value: 'coffee'},
  { key: 5, text: 'csharp', value: 'csharp'},
  { key: 6, text: 'css', value: 'css'},
  { key: 7, text: 'r', value: 'r'},
  { key: 8, text: 'ejs', value: 'ejs'},
  { key: 9, text: 'groovy', value: 'groovy'},
  { key: 10, text: 'golang', value: 'golang'},
  { key: 11, text: 'haskell', value: 'haskell'},
  { key: 12, text: 'html', value: 'html'},
  { key: 13, text: 'java', value: 'java'},
  { key: 14, text: 'jade', value: 'jade'},
  { key: 15, text: 'json', value: 'json'},
  { key: 16, text: 'jsx', value: 'jsx'},
  { key: 17, text: 'kotlin', value: 'kotlin'},
  { key: 18, text: 'perl', value: 'perl'},
  { key: 19, text: 'php', value: 'php'},
  { key: 20, text: 'prolog', value: 'prolog'},
  { key: 21, text: 'python', value: 'python'},
  { key: 22, text: 'sql', value: 'sql'},
  { key: 23, text: 'tsx', value: 'tsx'},
  { key: 24, text: 'typescript', value: 'typescript'},
  { key: 25, text: 'xml', value: 'xml'},
];

const fontsizeoptions = [
  { key: 1, text: '10', value: 10 },
  { key: 2, text: '12', value: 12 },
  { key: 3, text: '14', value: 14},
  { key: 4, text: '16', value: 16 },
  { key: 5, text: '18', value: 18 },
  { key: 6, text: '20', value: 50},
];


class ceditorContainer extends Component {


      constructor(){
        super();
        this.state={
           mode:'javascript',
           theme:'github',
           fontSize:18,
           tabSize:2
        };
      }


      onChange =(newValue)=>{
       console.log('change',newValue);
      }

      SetTheme=(e, {value})=>{
        this.setState({theme:value});
      }

      SetMode=(e, {value})=>{
        this.setState({mode:value});
      }

      SetFontSize=(e, {value})=>{
        this.setState({fontSize:value});
      }

      render() {
        return (
          <div>
            <Menu compact>
              <Dropdown text='Theme' options={themeoptions} simple item
                onChange={this.SetTheme}/>
              <Dropdown text='Mode' options={modeoptions} simple item
                onChange={this.SetMode}/>
              <Dropdown text='Font Size' options={fontsizeoptions} simple item
                onChange={this.SetFontSize}/>
            </Menu>
            <AceEditor
              mode={this.state.mode}
              theme={this.state.theme}
              onChange={this.onChange}
              name="root"
              fontSize={this.state.fontSize}
              editorProps={{$blockScrolling: true}}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                tabSize: this.state.tabSize,
                fontSize:this.state.fontSize,
                showGutter: true
              }}
            />
          </div>
        );
      }
}

export default ceditorContainer;

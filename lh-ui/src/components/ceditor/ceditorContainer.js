import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import io from 'socket.io-client';

import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/theme/github';

class ceditorContainer extends Component {

      onChange =(newValue)=>{
       console.log('change',newValue);
      }

      render() {
        return (
          <div>
            <AceEditor
              mode="javascript"
              theme="github"
              onChange={this.onChange}
              name="root"
              fontSize={16}
              editorProps={{$blockScrolling: true}}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                tabSize: 4,
                fontSize: 14,
                showGutter: true
              }}
            />
          </div>
        );
      }
}

export default ceditorContainer;

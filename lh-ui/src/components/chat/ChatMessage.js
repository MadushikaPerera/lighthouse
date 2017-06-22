import React, { Component } from 'react';
import Emojify from 'react-emojione';
import PropTypes from 'prop-types';
import { Comment, Icon } from 'semantic-ui-react';


class ChatMessageComponent extends Component{

    render(){
      return(
        <Comment.Group>
          <Comment>
            <Comment.Avatar as='a' src='.jpg' />
            <Comment.Content>
              <Comment.Author>{this.props.username}</Comment.Author>
              <Comment.Metadata>
                <div>{this.props.datetime}</div>
              </Comment.Metadata>
              <Comment.Text>
               <Emojify>
                <span>
                {this.props.message}
                </span>
               </Emojify>
              </Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      );
    }
}
//
// ChatMessageComponent.propTypes = {
//   username: PropTypes.String,
//   datetime: PropTypes.String,
//   message: PropTypes.String
// };

export default ChatMessageComponent;

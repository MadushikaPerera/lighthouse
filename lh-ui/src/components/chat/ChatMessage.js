import React from 'react';
import {emojify} from 'react-emojione';
import { Comment, Icon } from 'semantic-ui-react';

const ChatMessageComponent = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='/assets/images/avatar/small/'+{this.props.username}+'.jpg' />
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
)

export default ChatMessageComponent;

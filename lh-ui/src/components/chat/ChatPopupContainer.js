import React, { Component } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';


class ChatPopupContainer extends Component{



    componentDidMount() {

    }

    ChatMessages =()=> {

    }

    SendMessage =()=> {

    }

    render(){
      return(
        <div>ChatPopupContainer</div>
      );
    }

}

ChatPopupContainer.propTypes = {
  chat: PropTypes.array
};


export default ChatPopupContainer;

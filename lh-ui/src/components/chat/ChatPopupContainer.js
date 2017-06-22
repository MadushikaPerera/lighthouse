import React, { Component } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

let message = [
  {username:'Tharaka',datetime:'2017',message:'Hi B)'},
  {username:'Madushika',datetime:'2017',message:'Hi Whats up'},
  {username:'Tharaka',datetime:'2017',message:'Nothing special'},
  {username:'Madushika',datetime:'2017',message:'awesome'},
  {username:'Tharaka',datetime:'2017',message:':D'},
  {username:'Madushika',datetime:'2017',message:'anything new'},
  {username:'Tharaka',datetime:'2017',message:'not at all :P :D :* :( xDD :flag_lk:'},
]

class ChatPopupContainer extends Component{



    componentDidMount() {

    }

    ChatMessages =()=> {
        return message.map((msg,index)=>{
          return <ChatMessage key={index} username={msg.username} datetime={msg.datetime} message={msg.message}/>
        });
    }

    SendMessage =()=> {

    }

    render(){
      return(
        <div>
          ChatPopupContainer
          {this.ChatMessages()}
        </div>
      );
    }

}

ChatPopupContainer.propTypes = {
  chat: PropTypes.array
};


export default ChatPopupContainer;

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ChatMessage from './ChatMessage';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { Messages } from '../api/messages/messages';

class Chat extends Component {
  componentDidMount() {
    this.scrollTop();
  }
  onMessage(e) {
    const text = this.refs.input.value;
    if (e.key === 'Enter') {
      const { roomId } = this.props;

      Messages.insert({ roomId, message: text });

      this.animateScroll();
      this.refs.input.value = '';
    }
  }
  scrollTop() {
    const $chat = $(findDOMNode(this.refs.chat));
    $chat.scrollTop($chat[0].scrollHeight);
  }
  animateScroll() {
    const $chat = $(findDOMNode(this.refs.chat));
    $chat.animate({ scrollTop: $chat[0].scrollHeight }, 700);
  }
  render() {
    const { messages } = this.props;
    return (
      <div className="col-sm-9 col-xs-12">
        <div ref="chat" className="col-inside-lg decor-default chat" style={{'overflowY': 'auto'}}>
          <div className="chat-body">
            <h6>Mini Chat</h6>
            {messages.map((message, i) => <ChatMessage key={i} message={message}/>)}
          </div>
        </div>
        <div className="answer-add">
          <input ref="input" onKeyPress={this.onMessage.bind(this)} placeholder="Write a message"/>
          <span className="answer-btn answer-btn-1"></span>
          <span className="answer-btn answer-btn-2"></span>
        </div>
      </div>
    )
  }
}

export default ChatContainer = composeWithTracker((props, onData) => {
  const { activeRoom } = props;
  const messages = activeRoom.messages();

  const data = {
    messages,
    roomId: activeRoom._id
  };
  onData(null, data);
})(Chat);


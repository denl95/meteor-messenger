import React, { Component } from 'react';
import ChatMessage from './ChatMessage';

export default class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [
        {
          message: 'Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit'
        }
      ]
    };
  }
  onMessage(e) {
    const text = this.refs.input.value;
    if (e.key === 'Enter') {
      this.state.messages.push({ message: text });
      this.setState(this.state);
      this.refs.input.value = '';
    }
  }
  render() {
    const { messages } = this.state;
    return (
      <div className="col-sm-9 col-xs-12">
        <div className="col-inside-lg decor-default chat" style={{'overflowY': 'auto'}}>
          <div className="chat-body">
            <h6>Mini Chat</h6>
            {messages.map((obj, i) => <ChatMessage key={i} message={obj.message}/>)}
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

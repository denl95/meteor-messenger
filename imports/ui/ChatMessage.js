import React, { Component } from 'react';

export default class ChatMessage extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="answer left">
        <div className="avatar">
          <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/>
          <div className="status offline"></div>
        </div>
        <div className="name">Alexander Herthic</div>
        <div className="text">
          {message}
        </div>
        <div className="time">5 min ago</div>
      </div>
    )
  }
}
import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';

function isOwner(userId) {
  return Meteor.userId() == userId;
}

export default class ChatMessage extends Component {
  render() {
    const { message } = this.props;
    const isUser = isOwner(message.userId);
    const user = Meteor.user();
    return (
      <div className={classnames({
        answer: true,
        right: isUser,
        left: !isUser
      })}>
        <div className="avatar">
          <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/>
          <div className="status online"></div>
        </div>
        <div className="name">{user.username}</div>
        <div className="text">
          {message.message}
        </div>
        <div className="time">{moment(message.date).format('HH:mm:ss')}</div>
      </div>
    )
  }
}
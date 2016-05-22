import React, { Component } from 'react';
import classnames from 'classnames';
import { Rooms } from '../api/rooms/rooms'
import './UserOnline.css';

export default class UserOnline extends Component {
  onClick() {
    const { user, onClick } = this.props;
    onClick.call(null, Rooms.findOne({ users: { $all: [user._id, Meteor.userId()] } }));
  }
  render() {
    const { user, isActiveRoom } = this.props;
    return (
      <div onClick={this.onClick.bind(this)} className={classnames({
        user: true,
        'user-active': isActiveRoom
      })}>
        <div className="avatar">
          <img src="http://bootdey.com/img/Content/avatar/avatar1.png"/>
          <div className="status online"></div>
        </div>
        <div className="name">{user.username}</div>
      </div>
    )
  }
}
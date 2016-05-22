import React, { Component } from 'react';
import UserOnline from './UserOnline';
import { Rooms } from '../api/rooms/rooms'

export default class UsersList extends Component {
  isActiveRoom(user) {
    const { activeRoom } = this.props;
    const { _id } = user;
    
    return activeRoom && activeRoom._id === Rooms.findOne({ users: { $all: [_id, Meteor.userId()] } })._id;
  }
  render() {
    const { usersOnline, setActiveRoom } = this.props;
    return (
      <div className="col-sm-3 col-xs-12">
        <div className="col-inside-lg decor-default chat users-list" style={{'overflowY': 'auto'}} tabIndex="5000">
          <div className="chat-users">
            <h6>Online</h6>
            {usersOnline.map((user, i) =>
              <UserOnline onClick={setActiveRoom} isActiveRoom={this.isActiveRoom(user)} key={i} user={user}/>
            )}
          </div>
        </div>
      </div>
    )
  }
}
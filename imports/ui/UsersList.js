import React, { Component } from 'react';
import UserOnline from './UserOnline';

export default class UsersList extends Component {
  constructor() {
    super();
    
    this.state = {
      users: [
        {
          userName: 'Denys'
        },
        {
          userName: 'Slava'
        },
        {
          userName: 'Dima'
        }
      ]
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div className="col-sm-3 col-xs-12">
        <div className="col-inside-lg decor-default chat users-list" style={{'overflowY': 'auto'}} tabIndex="5000">
          <div className="chat-users">
            <h6>Online</h6>
            {users.map((user, i) => <UserOnline key={i} userName={user.userName}/>)}
          </div>
        </div>
      </div>
    )
  }
}
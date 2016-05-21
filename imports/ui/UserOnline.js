import React, { Component } from 'react';
import './UserOnline.css';

export default class UserOnline extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div className="user">
        <div className="avatar">
          <img src="http://bootdey.com/img/Content/avatar/avatar1.png"/>
          <div className="status off"></div>
        </div>
        <div className="name">{userName}</div>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Chat from './Chat';
import UsersList from './UsersList';

export default class App extends Component {
  render() {
    return (
      <div className="content container-fluid bootstrap snippets">
        <div className="row row-broken">
          <UsersList/>
          <Chat/>
        </div>
      </div>
    )
  }
}
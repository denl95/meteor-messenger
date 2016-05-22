import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Chat from './Chat';
import UsersList from './UsersList';
import { Rooms } from '../api/rooms/rooms'

const activeRoom = new ReactiveVar(null);

class App extends Component {
  setActiveRoom(room) {
    activeRoom.set(room);
  }
  renderChat() {
    if (activeRoom.get()) {
      return (
        <Chat activeRoom={activeRoom.get()}/>
      )
    }
  }
  render() {
    const { usersOnline } = this.props;
    return (
      <div className="content container-fluid bootstrap snippets">
        <div className="row row-broken">
          <UsersList activeRoom={activeRoom.get()} 
                     setActiveRoom={this.setActiveRoom.bind(this)} 
                     usersOnline={usersOnline}/>
          {this.renderChat()}
        </div>
      </div>
    );
  }
}

export default AppContainer = composeWithTracker((props, onData) => {
  Meteor.subscribe('rooms');
  Meteor.subscribe('usersOnline');
  
  const usersOnline = Meteor.users.find({ _id: { $not: new RegExp(Meteor.userId()) } }).fetch();
  
  const usersIds = _.pluck(usersOnline, '_id');
  let defaultRoom = null;
  if (usersIds.length) {
    defaultRoom = Rooms.findOne({ users: Meteor.userId() });
  }
  activeRoom.set(defaultRoom);
  
  const data = {
    usersOnline
  };
  
  onData(null, data);
})(App);
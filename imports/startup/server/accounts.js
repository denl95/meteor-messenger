import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Rooms } from '../../api/rooms/rooms';

function insertRooms(user) {
  const users = Meteor.users.find({}).fetch();
  if (users.length) {
    const userIds = _.pluck(users, '_id');
    userIds.forEach((obj) => {
      const newRoom = {
        users: [obj, user._id]
      };
      Rooms.insert(newRoom);
    });
  }
}

Accounts.onCreateUser(function(options, user) {
  insertRooms(user);

  return user;
});
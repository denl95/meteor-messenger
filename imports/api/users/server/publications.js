import { Meteor } from 'meteor/meteor';

Meteor.publish('usersOnline', function () {
  return Meteor.users.find({ status: 'online' });
});
import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages';

Meteor.publish('messages', function() {
  return Messages.find({});
});
import { Meteor } from 'meteor/meteor';
import { Rooms } from '../rooms';
import { Messages } from '../../messages/messages';
 
Meteor.publishComposite('rooms', function() {
  return {
    find() {
      return Rooms.find({});
    },
    children: [{
      find() {
        return Messages.find({});
      }
    }]
  };
});
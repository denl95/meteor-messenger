import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Messages } from '../messages/messages';

const RoomSchema = new SimpleSchema({
  users: {
    type: [String],
    optional: true
  }
});

const Rooms = new Mongo.Collection('chatRooms');
Rooms.helpers({
  messages() {
    return Messages.find({ roomId: this._id });
  }
});
Rooms.attachSchema(RoomSchema);

export { Rooms };


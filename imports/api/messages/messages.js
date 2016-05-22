import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const MessageSchema = new SimpleSchema({
  roomId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue() {
      if (this.isInsert) {
        return this.userId;
      }
    }
  },
  message: {
    type: String,
    optional: true
  },
  date: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      }
    }
  }
});

const Messages = new Mongo.Collection('rooms');
Messages.allow({
  insert() {
    return true;
  }
});
Messages.attachSchema(MessageSchema);

export { Messages };
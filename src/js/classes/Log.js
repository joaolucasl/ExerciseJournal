import uuid from 'uuid-v4';
import moment from 'moment';

class Log {
  constructor(data) {
    this.validate(data);
    this.uuid = data.uuid || uuid();
    this.time = data.time;
    this.type = data.type;
    this.date = data.date || moment().toISOString();
  }
  validate(data) {
    const validTypes = ['run', 'swim', 'bike'];
    //  Validating the argument type first so it isn't nonsense.
    if (typeof data !== 'object') {
      throw new TypeError('The argument\'s type should be an object.');
    }
    //  Validating the UUID, if it was set. Otherwise, we set it on constructor
    if (typeof data.uuid !== 'undefined' && !uuid.isUUID(data.uuid)) {
      throw new Error('Invalid UUID');
    }
    //  Same with the date - if it wasn't passed in our ags, we will generate it later
    if (typeof data.date !== 'undefined' && !moment(data.date).isValid()) {
      throw new Error('Invalid Date.');
    }
    //  Time has to be a number, and also greater than 0 (No one works out negative hours! :P)
    if (!(typeof data.time === 'number' && data.time > 0)) {
      throw new Error('Invalid time.');
    }
    //  Here we search for the passed activity in the validTypes array and throw if undefined
    if (validTypes.find(type => type === data.type.toLowerCase()) === undefined) {
      throw new Error('Invalid activity type.');
    }
  }
}

export default Log;

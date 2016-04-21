import uuid from 'uuid-v4';

class Log {
  constructor(data){
    this.uuid = data.uuid || uuid();
    this.time = data.time;
    this.type = data.type;
    this.date = data.date;
  }
}

export default Log;

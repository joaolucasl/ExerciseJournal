import uuid from 'uuid';

class Log {
  constructor(data){
    this.uuid = data.uuid || uuid.v4;
    this.time = data.time;
    this.type = data.type;
    this.date = data.date;
  }
}

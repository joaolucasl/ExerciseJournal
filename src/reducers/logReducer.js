import Log from '../classes/Log.js';

const initialState = {
  logs: [
    new Log({ time: 2, type: 'run', date: new Date() }),
    new Log({ time: 3, type: 'swim', date: new Date() }),
  ],
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOG': {
      return Log.addLog(state, action.payload.uuid);
    }
    case 'REMOVE_LOG': {
      return Log.removeLog(state, action.payload.uuid);
    }
    default:
      return state;
  }
};

export default logReducer;

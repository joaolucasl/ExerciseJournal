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
      return Log.addLog(state, action.payload.log);
    }
    case 'REMOVE_LOG': {
      return Log.remove(state, action.payload.log);
    }
    default:
      return state;
  }
};

export default logReducer;

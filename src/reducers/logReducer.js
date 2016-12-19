import Log from '../classes/Log.js';

const initialState = {
  logs: [],
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

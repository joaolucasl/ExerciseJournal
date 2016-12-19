const addLog = (log) => ({
  type: 'ADD_LOG',
  payload: {
    log,
  },
});

export default addLog;

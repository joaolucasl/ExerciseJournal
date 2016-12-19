const removeLog = (uuid) => ({
  type: 'REMOVE_LOG',
  payload: {
    uuid,
  },
});

export default removeLog;

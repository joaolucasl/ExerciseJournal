const addErrorMessage = (msg) => ({
  type: 'ADD_ERROR_MESSAGE',
  payload: {
    msg,
  },
});

export default addErrorMessage;

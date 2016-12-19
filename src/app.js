import React from 'react';
import DOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logReducer from './reducers/logReducer';

import './views/index.html';
import './scss/index.styl';
import 'react-datepicker/dist/react-datepicker.css';

import WorkoutApp from './components/WorkoutApp.jsx';

const store = createStore(logReducer);

DOM.render(
  <Provider store={store}>
    <WorkoutApp />
  </Provider>,
  document.getElementById('WorkoutApp')
);

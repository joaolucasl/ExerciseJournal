import React from 'react';
import DOM from 'react-dom';
import './views/index.html';
import './scss/index.styl';
import 'react-datepicker/dist/react-datepicker.css';

import WorkoutApp from './js/components/WorkoutApp.jsx';

DOM.render(
  <WorkoutApp />,
  document.getElementById('WorkoutApp')
);

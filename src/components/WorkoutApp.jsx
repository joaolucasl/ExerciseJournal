import React from 'react';
import LogList from '../containers/LogList.jsx';
import NewLogForm from './NewLogForm.jsx';
import LogTimeCounter from './LogTimeCounter.jsx';

class WorkoutApp extends React.PureComponent {
  render() {
    return (
      <div className="app-holder">
        <div className="top-area">
        </div>
        <LogList />
      </div>
    );
  }
}

export default WorkoutApp;

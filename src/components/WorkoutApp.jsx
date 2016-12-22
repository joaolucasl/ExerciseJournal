import React from 'react';
import OrderedLogList from '../containers/OrderedLogList.jsx';
import NewLogForm from './NewLogForm.jsx';
import LogTimeCounter from './LogTimeCounter.jsx';

class WorkoutApp extends React.PureComponent {
  render() {
    return (
      <div className="app-holder">
        <div className="top-area">
        </div>
        <OrderedLogList />
      </div>
    );
  }
}

export default WorkoutApp;

import React from 'react';
import OrderedLogList from '../containers/OrderedLogList.jsx';
import TopAreaContainer from '../containers/TopAreaContainer.jsx';

class WorkoutApp extends React.PureComponent {
  render() {
    return (
      <div className="app-holder">
        <TopAreaContainer />
        <OrderedLogList />
      </div>
    );
  }
}

export default WorkoutApp;

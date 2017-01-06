import React from 'react';
import NewLogForm from './NewLogForm.jsx';
import LogTimeCounter from './LogTimeCounter.jsx';

class TopArea extends React.PureComponent {
  render() {
    const { logs } = this.props;
    const loggedTime = logs.reduce((acc, x) => acc + x.time, 0);
    return (
      <div className="top-area">
        <LogTimeCounter time={loggedTime} />
      </div>
    );
  }
}

export default TopArea;

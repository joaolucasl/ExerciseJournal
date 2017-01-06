import React from 'react';
import NewLogForm from './NewLogForm.jsx';
import LogTimeCounter from './LogTimeCounter.jsx';

class TopArea extends React.PureComponent {
  render() {
    return (
      <div className="top-area">
        <LogTimeCounter logs={this.props.logs} />
      </div>
    );
  }
}

export default TopArea;

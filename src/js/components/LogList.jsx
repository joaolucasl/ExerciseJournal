import React from 'react';
import Log from '../classes/Log.js';
import LogItem from './LogItem.jsx';

class LogList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logs: this.props.logs || []
    };
    this.removeLog = this.removeLog.bind(this);
  }
  
  componentWillReceiveProps(newProps){
    this.setState({
      logs: newProps.logs
    });
  }
  removeLog(uuid){
    this.props.removeLog(uuid);
  }
  render() {
    //  We build the LogItems list based on state
    const items = this.state.logs.map(log =>
                <LogItem
                  type={log.type}
                  time={log.time}
                  uuid={log.uuid}
                  key={log.uuid}
                  removeLog={this.removeLog}
                />
    );
    //  And return it wrapped inside a UL tag
    return (
      <ul id="log-list">
          {items}
      </ul>
    );
  }
}
export default LogList;

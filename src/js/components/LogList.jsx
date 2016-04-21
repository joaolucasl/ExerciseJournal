import React from 'react';
import Log from '../classes/Log.js';
import LogItem from './LogItem.jsx';

class LogList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logs: this.props.logs || []
    };
  }
  componentWillReceiveProps(newProps){
    this.setState({
      logs: newProps.logs
    });
  }
  render() {
    const self = this;
    return (
      <ul id="log-list">
          {
            this.state.logs.map( log => {
              return (
                <LogItem
                  type={log.type}
                  time={log.time}
                  uuid={log.uuid}
                  key={log.uuid}
                  removeLog={self.removeLog.bind(self)}
                  />
              )
            }
            )}
      </ul>
    )
  }
  removeLog(uuid){
    this.props.removeLog(uuid);
  }
}
export default LogList;

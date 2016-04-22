import React from 'react';
import LogList from './LogList.jsx';
import NewLogForm from './NewLogForm.jsx';
import LogTimeCounter from './LogTimeCounter.jsx';
import Log from '../classes/Log.js';

class WorkoutApp extends React.Component {
  /**
   * The constructor of the Application. Runs the parent's
   * constructor (super) and sets the inital state.
   */
  constructor() {
    super();
    this.removeLog = this.removeLog.bind(this);
    this.addLog = this.addLog.bind(this);
    this.state = {
      logs: [
        new Log({
          time: 1,
          type: 'Run',
          date: new Date(Date.now()).toISOString(),
        }),
        new Log({
          time: 2,
          type: 'Run',
          date: new Date(Date.now()).toISOString(),
        })],
    };
  }

  /**
   * Adds a new log to the current list,
   * and updates the Application's state.
   * @param {Object} log The new log to be added
   */
  addLog(log) {
    const newLogArray = this.state.logs;
    newLogArray.push(log);
    this.setState({
      logs: newLogArray,
    });
  }
  /**
   * Removes the log corresponding to the UUID passed as parameter
   * from the array, and updates the state accordingly.
   * @param {String} logUUID The log's UUID to be removed
   */
  removeLog(logUUID) {
    const updatedLogList = this.state.logs.filter(node => !(node.uuid === logUUID));
    this.setState({
      logs: updatedLogList,
    });
  }
  render() {
    return (
      <div className="app-holder">
        <div className="top-area">
          <LogTimeCounter time={this.state.logs.length} />
          <NewLogForm addLog={this.addLog} />
        </div>
        <LogList logs={this.state.logs} removeLog={this.removeLog} />
      </div>
    );
  }
}

export default WorkoutApp;

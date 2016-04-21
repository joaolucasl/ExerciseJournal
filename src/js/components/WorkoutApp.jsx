import React from 'react';
import LogList from './LogList.jsx';
import Log from '../classes/Log.js';

class WorkoutApp extends React.Component{
  /**
   * The constructor of the Application. Runs the parent's
   * constructor (super) and sets the inital state.
   */
  constructor(){
    super();
    this.state = {
       logs: [
        new Log({
         time: 1,
         type: 'Run',
         date: new Date(Date.now()).toISOString()
        }),
        new Log({
         time: 2,
         type: 'Run',
         date: new Date(Date.now()).toISOString()
        })]
    };
  }
  componentWillReceiveProps(newProps){
    this.setState({
      logs: newProps.logs
    });
  }
  render(){
    return(
      <LogList logs={this.state.logs} />
    );
  }
  /**
   * Adds a new log to the current list,
   * and updates the Application's state.
   * @param {Object} log The new log to be added
   */
  addLog(log){
    let newLogArray = this.state.push(log);
    this.setState({
      logs: newLogArray
    });
  }
};
export default WorkoutApp;

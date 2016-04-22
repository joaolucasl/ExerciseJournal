import React from 'react';
import LogList from './LogList.jsx';
import NewLogForm from './NewLogForm.jsx';
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
//      logs: []
    };
  }
  componentWillReceiveProps(newProps){
    this.setState({
      logs: newProps.logs
    });
  }
  render(){
    return(
      <div class="AppHolder">
        <NewLogForm />
        <LogList logs={this.state.logs} removeLog={this.removeLog.bind(this)}/>
      </div>
    );
  }
  /**
   * Adds a new log to the current list,
   * and updates the Application's state.
   * @param {Object} log The new log to be added
   */
  addLog(log){
    let newLogArray = this.state.logs;
    newLogArray.push(log);
    this.setState({
      logs: newLogArray
    });
  }
  removeLog(logUUID){
    let updatedLogList= this.state.logs.filter(node=>!(node.uuid===logUUID));
    this.setState({
      logs: updatedLogList
    });
    console.log(updatedLogList);
  }
};
export default WorkoutApp;

import React from 'react';
import LogList from './LogList.jsx';

export default class WorkoutApp extends React.Component{
  constructor(){
    super();
    this.state = {
       logs: [
        {
         time: 1,
         type: "Run",
         date: new Date(Date.now()).toISOString()
        },
        {
         time: 2,
         type: "Run",
         date: new Date(Date.now()).toISOString()
        }]
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
}


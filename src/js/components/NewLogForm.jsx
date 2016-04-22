import React from 'react';
import Log from '../classes/Log.js';

class NewLogForm extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="new-log-form">
        <form onSubmit={this.handleFormSubmition}>
          <input type="text" id="time" placeholder="Time spent"/>
          <input type="text" id="time" placeholder="Activity Type"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
  handleFormSubmition(data){
    alert("Submitted");
  }
}

export default NewLogForm;

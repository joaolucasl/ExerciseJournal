import React from 'react';

class LogItem extends React.Component{
 constructor(props){
   super(props);
 }
 render() {
  return (
    <li className="log-item">
      <div className="log-item-left">
       <img src={"img/icon-"+this.props.type.toLowerCase()+".png"} />
      </div>
      <div className="log-item-content">
        <h4 className="log-item-header">
          {this.props.type}
        </h4>
        {this.props.time} hours
      </div>
      <div className="log-item-right">
        <button onClick={this.handleRemoveButton.bind(this)}>
          Remove
        </button>
      </div>
    </li>
  )
 }
 handleRemoveButton(){
    this.props.removeLog(this.props.uuid);
 }
}
export default LogItem;

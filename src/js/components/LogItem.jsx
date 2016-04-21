import React from 'react';

const LogItem = (props) => {
  return (
    <li className="log-item">
      <div className="log-item-left">
       <img src="http://placehold.it/64x64" />
      </div>
      <div className="log-item-content">
        <h4 className="log-item-header">
          {props.type}
        </h4>
        {props.time} hours
      </div>
      <div className="log-item-right">
        <a href="#">Remove</a>
      </div>
    </li>
  )
}
export default LogItem;

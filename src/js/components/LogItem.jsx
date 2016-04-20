import React from 'react';

const LogItem = (props) => {
  return (
    <div className="list-item">
      <h1>{props.uuid}</h1>

      <p><b>{props.type}</b> - {props.time} hours</p>
      <a href="#">Remove</a>
    </div>
  )
}
export default LogItem;

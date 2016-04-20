import React from 'react';

const LogList = ({logs}) => {
  return (
    <div>
      <h3> Logs </h3>
      <ul className="list-group">
        {logs.map(log => {
          return (
            <li className="list-group-item">
              <h4>{log.type}</h4>
              <p>{log.time}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default LogList;

import React from 'react';
import LogItem from './LogItem.jsx';

const LogList = ({logs}) => {
  return (
    <div>
      <h3> Logs </h3>
      <ul className="list-group">
        {
          logs.map( (log,i) => {
            return (
              <LogItem
                type={log.type}
                time={log.time}
                key={i}
                />
            )
          })
        }
      </ul>
    </div>
  )
}
export default LogList;

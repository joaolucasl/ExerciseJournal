import React from 'react';
import LogItem from './LogItem.jsx';

const LogList = ({logs}) => {
  return (
    <div id="log-list">
        {
          logs.map( log => {
            return (
              <LogItem
                type={log.type}
                time={log.time}
                key={log.uuid}
                />
            )
          })
        }
    </div>
  )
}
export default LogList;

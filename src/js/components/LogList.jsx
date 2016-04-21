import React from 'react';
import LogItem from './LogItem.jsx';

const LogList = ({logs}) => {
  return (
    <ul id="log-list">
        {
          logs.map( log => {
            return (
              <LogItem
                type={log.type}
                time={log.time}
                uuid={log.uuid}
                key={log.uuid}
                />
            )
          })
        }

    </ul>
  )
}
export default LogList;

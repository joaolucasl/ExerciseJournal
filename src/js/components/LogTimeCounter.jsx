import React from 'react';

function LogTimeCounter({ time }) {
  const timeString = (time > 1) ? 'hours' : 'hour';
  return <span className="logged-time">{ `${time} ${timeString} of exercise logged.` }</span>;
}
LogTimeCounter.propType = {
  time: React.PropTypes.string.isRequired,
};

export default LogTimeCounter;

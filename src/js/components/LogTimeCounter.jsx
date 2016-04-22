import React from 'react';

function LogTimeCounter({ time }) {
  let timeString;
  let subtitle;
  if (time > 0) {
    const hourString = (time > 1) ? 'hours' : 'hour';
    timeString = `${time} ${hourString} of exercise logged! Awesome!`;
    subtitle = 'Good job!';
  } else {
    timeString = 'You haven\'t logged any activities yet... :( ';
    subtitle = 'Try adding a new one!';
  }

  return (
    <div id="logged-time">
      <p>{ timeString }</p>
      <small>{subtitle}</small>
    </div>);
}
LogTimeCounter.propType = {
  time: React.PropTypes.string.isRequired,
};

export default LogTimeCounter;

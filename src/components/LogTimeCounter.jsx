import React from 'react';

class LogTimeCounter extends React.PureComponent {
  render() {
    const { logs } = this.props;
    const time = logs.reduce((acc, x) => acc + x.time, 0);

    let timeString;
    let subtitle;

    if (time > 0) {
      const hourString = (time > 1) ? 'hours' : 'hour';
      timeString = `${time} ${hourString} of exercise logged so far`;
      subtitle = 'Keep up the great work!';
    } else {
      timeString = 'You haven\'t logged any activities yet... :( ';
      subtitle = 'Try adding a new one!';
    }

    return (
      <div id="logged-time">
        <p>{timeString}</p>
        <small>{subtitle}</small>
      </div>);
  }
}

LogTimeCounter.propTypes = {
  time: React.PropTypes.number.isRequired,
};

export default LogTimeCounter;

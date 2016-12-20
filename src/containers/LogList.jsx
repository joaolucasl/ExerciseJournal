import React from 'react';
import LogItem from '../components/LogItem.jsx';
import { connect } from 'react-redux';
import Log from '../classes/Log';

/**
 * This class is the holder for the list of logs.
 * It renders LogItem instances, based off the
 * parent's Logs state, passed to this class as props.
 * It forwards a bound `removeLog` function from
 * the parent to each LogItem child.
 */
class LogList extends React.PureComponent {
  render() {
    //  We build the LogItems list based on state
    const items = this.props.logs.map(log =>
                <LogItem
                  type={log.type}
                  time={log.time}
                  date={log.date}
                  uuid={log.uuid}
                  key={log.uuid}
                  removeLog={this.removeLog}
                />
    );
    //  And return it wrapped inside a UL tag
    return (
      <ul id="log-list">
          {items}
      </ul>
    );
  }
}

LogList.propTypes = {
  logs: React.PropTypes.arrayOf(Log),
};

const mapStateToProps = (state) => {
  return {
    logs: state.logs,
  };
};

export default connect(mapStateToProps)(LogList);

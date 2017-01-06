import React from 'react';
import moment from 'moment';

/**
 * This class is the holder for single Lot Item's data;
 * It is very simple, and basically only shows off the
 * Log's information, and offers a remove button so the
 * user can delete this specific log when wanted.
 */
class LogItem extends React.PureComponent {
  render() {
    return (
      <li className="log-item">
        <div className="log-item-left">
          <img src={`img/icon-${this.props.type.toLowerCase()}.png`} alt={this.props.type} />
        </div>
        <div className="log-item-content">
          <h4 className="log-item-header">
            {this.props.type}
          </h4>
          {this.props.time} hours <br />
        </div>
        <div className="log-item-right">
          <button onClick={() => this.props.removeLog(this.props.uuid)}>
            Remove
          </button>
        </div>
      </li>
    );
  }
}

export default LogItem;

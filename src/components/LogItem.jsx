import React from 'react';
/**
 * This class is the holder for single Lot Item's data;
 * It is very simple, and basically only shows off the
 * Log's information, and offers a remove button so the
 * user can delete this specific log when wanted.
 */
class LogItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
  }
  /**
   * This function is the callback function for when the remove
   * button is pressed in the LogItem. It uses the removeLog prop
   * to remove itself from the parent's state.
   */
  handleRemoveButton() {
    this.props.removeLog(this.props.uuid);
  }
  /**
   * Renders the Component DOM structure, with the Log's data
   * and a corresponding image based on its type, as well as a
   * button for deletion of the current log.
   */
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
          {this.props.date.format("DD/MM/YY")}
        </div>
        <div className="log-item-right">
          <button onClick={this.handleRemoveButton }>
            Remove
          </button>
        </div>
      </li>
    );
  }
}
LogItem.propTypes = {
  removeLog: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired,
  time: React.PropTypes.number.isRequired,
  date: React.PropTypes.object.isRequired,
  uuid: React.PropTypes.string.isRequired,
};
export default LogItem;

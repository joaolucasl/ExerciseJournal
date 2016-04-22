import React from 'react';

class LogItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
  }
  handleRemoveButton() {
    this.props.removeLog(this.props.uuid);
  }
  render() {
    return (
      <li className="log-item">
        <div className="log-item-left">
          <img src={'img/icon-' + this.props.type.toLowerCase() + '.png'} alt={this.props.type} />
        </div>
        <div className="log-item-content">
          <h4 className="log-item-header">
            {this.props.type}
          </h4>
          {this.props.time} hours
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
export default LogItem;

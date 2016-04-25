import React from 'react';
import Log from '../classes/Log.js';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class NewLogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedDate: moment(),
      validationError: [],
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleFormSubmission(event) {
    event.preventDefault();
  }
  openModal() {
    this.setState({
      modalIsOpen: true,
      selectedDate: this.state.selectedDate,
      validationError: this.state.validationError,
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedDate: this.state.selectedDate,
      validationError: this.state.validationError,
    });
  }
  render() {
    let ErrorArea;
    if (this.state.validationError.length > 0) {
      const errors = this.state.validationError;
      const errorMsgs = errors.map(error => <span className="error-msg">{error}</span>);
      ErrorArea = <div className="error-area">{errorMsgs}</div>;
    }
    return (
      <div id="new-log-area">
        <button onClick={this.openModal}>Add New</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="new-log-modal"
          overlayClassName="new-log-modal-overlay"
        >
            <h3></h3>
            {ErrorArea}
            <form onSubmit={this.handleFormSubmission} id="new-log-form">
              <input type="text" id="time" placeholder="Time spent" />
              <select ref="type" id="type">
                <option value="run">Running</option>
                <option value="swim">Swim</option>
                <option value="bike">Cycling</option>
              </select>
              <DatePicker
                maxDate={moment()}
                selected={this.state.selectedDate}
                placeholderText="Date"
              />
              <div className="action-buttons">
                <button type="submit">Submit</button>
              </div>
            </form>
        </Modal>
      </div>
    );
  }
}

export default NewLogForm;

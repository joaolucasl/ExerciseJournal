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
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedDate: this.state.selectedDate,
    });
  }
  render() {
    return (
      <div id="new-log-area">
        <button onClick={this.openModal}>Add New</button>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
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

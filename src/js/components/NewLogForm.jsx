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
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.addLog = this.props.addLog;
  }
  handleFormSubmission(event) {
    event.preventDefault();
    this.clearErrorMsg();
    const time = Number(this.refs.time.value);
    const type = this.refs.type.options[this.refs.type.selectedIndex].value;
    const date = this.state.selectedDate;
    //  Here we try to create a new log (which may throw exceptions) and add it to the state.
    try {
      const tempLog = new Log({
        time,
        type,
        date,
      });
      this.addLog(tempLog);
      this.closeModal();
    } catch (ex) {
      //  If it catches an exception, we add the error message state
      this.addErrorMsg(ex.message);
    }
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
    return false;
  }
  addErrorMsg(msg) {
    const newErrArray = this.state.validationError;
    newErrArray.push(msg);
    this.setState({
      modalIsOpen: this.state.modalIsOpen,
      selectedDate: this.state.selectedDate,
      validationError: newErrArray,
    });
  }
  clearErrorMsg() {
    this.setState({
      modalIsOpen: this.state.modalIsOpen,
      selectedDate: this.state.selectedDate,
      validationError: [],
    });
  }
  updateSelectedDate(date) {
    this.setState({
      modalIsOpen: this.state.modalIsOpen,
      selectedDate: date,
      validationError: this.state.validationError,
    });
  }
  /**
   * This function renders the New Log Form ui components:
   * - A Button that opens a Modal window
   * - A Modal Window holding:
   *    - A form (Time Spent, Type of Activity and a Date picker)
   *    - An error area, shown only when errors are present
   *    - The action buttons for submission and closing functions
   **/
  render() {
    let errorArea;

    //  If there's at least one error in the array, we build the error messages DOM Objects
    if (this.state.validationError.length > 0) {
      const errors = this.state.validationError;
      const errorMsgs = errors.map(error => <span className="error-msg">{error}</span>);
      errorArea = <div className="error-area">{errorMsgs}</div>;
    }

    // Here we create the UI elements
    return (
      <div id="new-log-area">
        <button onClick={() => this.openModal()}>Add New</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          className="new-log-modal"
          overlayClassName="new-log-modal-overlay"
        >
          <h3>New Log</h3>
          {errorArea}
          <form onSubmit={this.handleFormSubmission} id="new-log-form">
            <input type="text" ref="time" id="time" placeholder="Time spent" required />
            <select ref="type" id="type" required>
              <option value="run">Running</option>
              <option value="swim">Swimming</option>
              <option value="bike">Cycling</option>
            </select>
            <DatePicker
              maxDate={moment()}
              selected={this.state.selectedDate}
              onChange={(date) => this.updateSelectedDate(date)}
              showYearDropdown
              dateFormatCalendar="MMMM"
              dateFormat="DD/MM/YY"
              placeholderText="Date"
            />
            <div className="action-buttons">
              <button type="button"
                className="secondary"
                onClick={() => this.closeModal()}
              >
                Close
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default NewLogForm;

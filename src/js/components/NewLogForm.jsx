import React from 'react';
import Log from '../classes/Log.js';
import Modal from 'react-modal';

class NewLogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleFormSubmission(data) {

  }
  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }
  render() {
    return (
      <div className="new-form-">
        <button onClick={this.openModal}>+</button> 
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <div id="new-log-form">
            <form onSubmit={this.handleFormSubmission}>
              <input type="text" id="time" placeholder="Time spent" />
              <input type="text" id="time" placeholder="Activity Type" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewLogForm;

import React, { PureComponent } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Button, Modal } from '../../hig-react';

class ModalSection extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      openUncontrolled: false
    };
  }

  logCloseModal = (event) => {
    console.log('Close modal triggered');
  };

  closeModal = (event) => {
    event.preventDefault();
    this.setState({ isOpen: false, openUncontrolled: false });
  };

  openModal = (event) => {
    event.preventDefault();
    this.setState({ isOpen: true, openUncontrolled: false });
    console.log(this.state);
  };

  openModalUncontrolled = (event) => {
    event.preventDefault();
    this.setState({ openUncontrolled: true });
    console.log(this.state);
  };

  render() {
    const buttonProps = [
      { title: 'Cancel', type: 'secondary', onClick: this.closeModal },
      { title: 'Ok', onClick: this.closeModal }
    ];

    return (
      <PlaygroundSection title="Modal">
        <Button title="Open modal (uncontrolled)" onClick={this.openModalUncontrolled} />
        <Modal
          title="Are you sure?"
          openUncontrolled={this.state.openUncontrolled}
          body="This is the text body of my modal"
          style="standard"
          onClose={this.logCloseModal}
          >
          <h1><u>This is my HTML title</u></h1>
          <p><i>This is my HTML content.</i></p>
        </Modal>

        <Button title="Open modal (controlled)" onClick={this.openModal} />
        <Modal
          title="Are you sure?"
          openControlled={this.state.isOpen}
          buttons={buttonProps}
          body="This is the text body of my modal"
          style="alternate"
          onClose={this.closeModal}
          >
          <h1><u>This is my HTML title</u></h1>
          <p><i>This is my HTML content.</i></p>
        </Modal>
      </PlaygroundSection>
    )
  }
}
export default ModalSection;

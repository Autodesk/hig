import React, { PureComponent } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Button, Modal } from '../../hig-react';

class ModalSection extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  logCloseModal = (event) => {
    console.log('Close modal triggered');
  };

  closeModal = (event) => {
    this.setState({ isOpen: false });
  };

  openModal = (event) => {
    this.setState({ isOpen: true });
  };

  render() {
    const buttonProps = [
      { title: 'Cancel', type: 'secondary', onClick: this.closeModal },
      { title: 'Ok', onClick: this.closeModal }
    ];

    return (
      <PlaygroundSection title="Modal">
        <Button title="Open modal" onClick={this.openModal} />
        <Modal
          title="Are you sure?"
          open={this.state.isOpen}
          buttons={buttonProps}
          body="This is the text body of my modal"
          style="alternate"
          onClose={this.closeModal}
        >
          <h1><u>This is my HTML title</u></h1>
          <p><i>This is my HTML content.</i></p>
        </Modal>
      </PlaygroundSection>
    );
  }
}
export default ModalSection;

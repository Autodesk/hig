import React, { Component } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Button, Flyout } from '../../react-hig';

class FlyoutSection extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  closeFlyout = (event) => {
    event.preventDefault();
    this.setState({ isOpen: false });
  };

  openFlyout = (event) => {
    event.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    const buttonProps = [
      { title: 'Cancel', type: 'secondary', onClick: this.closeFlyout },
      { title: 'Ok', onClick: this.closeFlyout }
    ];

    return (
      <PlaygroundSection title="Flyout">
        <Button title="Open flyout" onClick={this.openFlyout} />
        <Flyout
          title="Are you sure?"
          isOpen={this.state.isOpen}
          buttons={buttonProps}
          body="This is the text body of my flyout"
          headerColor="gray"
          onClose={this.closeFlyout}
        >
          <h1><u>This is my HTML title</u></h1>
          <p><i>This is my HTML content.</i></p>
        </Flyout>
      </PlaygroundSection>
    )
  }
}
export default FlyoutSection;
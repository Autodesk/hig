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

  setContent = (el) => {
    this.setState({ content: el });
  }

  setTarget = (el) => {
    this.setState({ target: el });

  }

  myFlyoutContent = () => {
    return (
      <div>
        <h3>Important flyout information</h3>
        <p>You can put what ever you want in here.</p>
      </div>
    );
  };

  render() {
    const buttonProps = [
      { title: 'Cancel', type: 'secondary', onClick: this.closeFlyout },
      { title: 'Ok', onClick: this.closeFlyout }
    ];

    return (
      <PlaygroundSection title="Flyout">
        
        <Flyout
          title="Are you sure?"
          isOpen={this.state.isOpen}
          buttons={buttonProps}
          body="This is the text body of my flyout"
          headerColor="gray"
          onClose={this.closeFlyout}
          content={this.state.content}
          target={this.state.target}

        >
          <div ref={this.setContent}>
            {this.myFlyoutContent()};
           </div> 
          <div ref={this.setTarget}>
            <Button title="Open flyout" onClick={this.openFlyout} />;
          </div>
        </Flyout>
      </PlaygroundSection>
    )
  }
}
export default FlyoutSection;
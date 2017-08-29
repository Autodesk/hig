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


  myFlyoutContent = () => {
    return (
      <div>
        <h3>Important flyout information</h3>
        <p>You can put what ever you want in here.</p>
      </div>
    );
  };

  render() {
    return (
      <PlaygroundSection title="Flyout">
        
        <Flyout
          anchorPoint="top-right"
          open={this.state.isOpen}
          content={this.state.content}
          onClickOutside={this.closeFlyout}
          content={this.myFlyoutContent()}
        >
           <Button title="Open flyout" onClick={this.openFlyout} />
        </Flyout>
      </PlaygroundSection>
    )
  }
}
export default FlyoutSection;
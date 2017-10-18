import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Button, Flyout } from "../../hig-react";

class FlyoutSection extends Component {
<<<<<<< fc814d36c90159381c7954dddb2cfc8f39c93f11
=======

>>>>>>> completed tooltip adapter
  render() {
    return (
      <PlaygroundSection title="Flyout">
        <Flyout
          anchorPoint="bottom-left"
          content={
            <div>
              <h3>Important flyout information</h3>
              <p>You can put what ever you want in here.</p>
            </div>
          }
        >
          <Button title="Open flyout" />
        </Flyout>
      </PlaygroundSection>
    );
  }
}

export default FlyoutSection;

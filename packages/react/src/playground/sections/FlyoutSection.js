import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Button, Flyout } from "../../hig-react";

class FlyoutSection extends Component {
  render() {
    return (
      <PlaygroundSection title="Flyout">
        <Flyout
          anchorPoint="bottom-right"
          content={
            <div>
              <h3>Important flyout information</h3>
              <p>You can put what ever you want in here.</p>
            </div>
          }
          open
        >
          <Button title="Open flyout" />
        </Flyout>
      </PlaygroundSection>
    );
  }
}

export default FlyoutSection;

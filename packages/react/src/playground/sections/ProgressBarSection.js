import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";

import { ProgressBar, Range, Spacer } from "../../hig-react";

class ProgressBarSection extends Component {
  state = {
    percentComplete: 33
  };

  setPercentComplete = event => {
    this.setState({ percentComplete: event.target.value });
  };

  render() {
    return (
      <PlaygroundSection title="ProgressBar">
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 auto" }}>
            <Range
              label="Percent complete"
              value={this.state.percentComplete}
              onInput={this.setPercentComplete}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div style={{ flex: "1 1 0" }}>
            <Spacer inset="xl">
              <Spacer width="m" />
              <ProgressBar />
              <Spacer width="m" />
              <ProgressBar percentComplete={this.state.percentComplete} />
              <Spacer width="m" />
            </Spacer>
          </div>
        </div>
      </PlaygroundSection>
    );
  }
}

export default ProgressBarSection;

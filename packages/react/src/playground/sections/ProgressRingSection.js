import React, { Component } from "react";
import { ProgressRing as VanillaProgressRing } from "hig-vanilla";
import PlaygroundSection from "../PlaygroundSection";

import { ProgressRing, Range, Dropdown } from "../../hig-react";

const SIZE_OPTIONS = VanillaProgressRing.AvailableSizes.map(size => ({
  id: size,
  label: size,
  value: size
}));

const RING_CONTAINER_STYLES = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: "1 1 0"
};

class ProgressRingSection extends Component {
  state = {
    percentComplete: 33,
    size: "l"
  };

  setPercentComplete = event => {
    this.setState({ percentComplete: event.target.value });
  };

  setSize = size => {
    this.setState({ size });
  };

  render() {
    return (
      <PlaygroundSection title="ProgressRing">
        <div style={{ display: "flex" }}>
          <div>
            <Range
              label="Percent complete"
              value={this.state.percentComplete}
              onInput={this.setPercentComplete}
              min={0}
              max={100}
              step={1}
            />
            <Dropdown
              options={SIZE_OPTIONS}
              label="Size"
              value={this.state.size}
              onChange={this.setSize}
            />
          </div>
          <div style={RING_CONTAINER_STYLES}>
            <ProgressRing
              size={this.state.size}
              percentComplete={this.state.percentComplete}
            />
          </div>
          <div style={RING_CONTAINER_STYLES}>
            <ProgressRing size={this.state.size} />
          </div>
        </div>
      </PlaygroundSection>
    );
  }
}

export default ProgressRingSection;

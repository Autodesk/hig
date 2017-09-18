import React from "react";
import SpacerAdapter from "../../adapters/SpacerAdapter";

class Spacer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  setSlotEl = el => {
    this.setState({ setSlotEl: el });
  };

  render() {
    return (
      <SpacerAdapter {...this.props}>
        <div ref={this.setSlotEl}>{this.props.children}</div>
      </SpacerAdapter>
    );
  }
}

export default Spacer;

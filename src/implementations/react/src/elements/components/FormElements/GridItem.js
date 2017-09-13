import React from "react";
import GridItemAdapter from "../../../adapters/FormElements/GridItemAdapter";

class GridItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  setSlotEl = el => {
    this.setState({ setSlotEl: el });
  };

  render() {
    return (
      <GridItemAdapter
        fraction={this.props.fraction}
        content={this.state.setSlotEl}
      >
        <div ref={this.setSlotEl}>{this.props.children}</div>
      </GridItemAdapter>
    );
  }
}

export default GridItem;

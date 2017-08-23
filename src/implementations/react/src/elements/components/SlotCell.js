import React from "react";
import SlotCellAdapter from "../../adapters/SlotCellAdapter";

class SlotCell extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  setSlotEl = el => {
    this.setState({ slotEl: el });
  };

  render() {
    return (
      <SlotCellAdapter slot={this.state.slotEl}>
        <div ref={this.setSlotEl}>
          {this.props.children}
        </div>
      </SlotCellAdapter>
    );
  }
}

export default SlotCell;

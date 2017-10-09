import React from "react";
import * as PropTypes from "prop-types";
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


SlotCell.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
};

SlotCell.__docgenInfo = {
  props: {
    children: {
      description: "content for slot cell"
    },
    width: {
      description: "sets {String} width of the cell"
    }
  }
};

export default SlotCell;

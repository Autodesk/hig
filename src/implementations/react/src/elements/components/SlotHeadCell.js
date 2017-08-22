import React from "react";
import SlotHeadCellAdapter from "../../adapters/SlotHeadCellAdapter";
import * as PropTypes from "prop-types"

class SlotHeadCell extends React.Component {
	constructor() {
		super()

		this.state = {}
	}

	setSlotEl = (el) => {
		this.setState({slotEl: el});
	}



  render() {
    return (
      <SlotHeadCellAdapter slot={this.state.slotEl}>
        <div ref={this.setSlotEl}>{this.props.children}</div>
      </SlotHeadCellAdapter>
    );
  }
}

export default SlotHeadCell
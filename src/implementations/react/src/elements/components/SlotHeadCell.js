import React from "react";
import SlotHeadCellAdapter from "../../adapters/SlotHeadCellAdapter";

class SlotHeadCell extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	setSlotEl = (el) => {
		this.setState({slotEl: el});
	}



  render() {
    return (
      <SlotHeadCellAdapter slot={this.state.slotEl} width={this.props.width}>
        <div ref={this.setSlotEl}>{this.props.children}</div>
      </SlotHeadCellAdapter>
    );
  }
}

export default SlotHeadCell
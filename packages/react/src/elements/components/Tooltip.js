import * as PropTypes from "prop-types";
import React, { Component } from "react";
import * as HIG from "hig-vanilla";
import TooltipAdapter from "../../adapters/TooltipAdapter";

class Tooltip extends Component {
  static propTypes = {
    anchorPoint: PropTypes.oneOf(HIG.Tooltip.AvailableAnchorPoints),
    children: PropTypes.node,
    content: PropTypes.string
  };

  static __docgenInfo = {
    props: {
      anchorPoint: {
        description: "where the tooltip will be anchored relative to target"
      },
      children: { description: "target component to open the tooltip" },
      content: { description: "content for the tooltip" }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  closeTooltip = () => {
    this.setState({ open: false });
  };

  openTooltip = () => {
    this.setState({ open: true });
  };

  render() {
    const target = this.props.children
      ? React.cloneElement(this.props.children, { onClick: this.openTooltip })
      : null;
    return (
      <TooltipAdapter
        anchorPoint={this.props.anchorPoint}
        open={this.state.open}
        onClickOutside={this.closeTooltip}
        content={this.props.content}
      >
        {target}
      </TooltipAdapter>
    );
  }
}

export default Tooltip;

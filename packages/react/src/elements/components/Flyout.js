import * as PropTypes from "prop-types";
import React, { Component } from "react";
import { Flyout as VanillaFlyout } from "hig-vanilla";
import FlyoutAdapter from "../../adapters/FlyoutAdapter";

class Flyout extends Component {
  static propTypes = {
    anchorPoint: PropTypes.oneOf(VanillaFlyout.AvailableAnchorPoints),
    children: PropTypes.node,
    content: PropTypes.node
  };

  static __docgenInfo = {
    props: {
      anchorPoint: {
        description: "where the flyout will be anchored relative to target"
      },
      children: { description: "target component to open the flyout" },
      content: { description: "content for the flyout" }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  closeFlyout = () => {
    this.setState({ open: false });
  };

  toggleFlyout = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const target = this.props.children
      ? React.cloneElement(this.props.children, { onClick: this.toggleFlyout })
      : null;
    return (
      <FlyoutAdapter
        anchorPoint={this.props.anchorPoint}
        open={this.state.open}
        onClickOutside={this.closeFlyout}
        content={this.props.content}
      >
        {target}
      </FlyoutAdapter>
    );
  }
}

export default Flyout;

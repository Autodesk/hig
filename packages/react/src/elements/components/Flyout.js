import PropTypes from "prop-types";
import React, { Component } from "react";
import { Flyout as VanillaFlyout } from "hig-vanilla";
import FlyoutAdapter from "../../adapters/FlyoutAdapter";

export default class Flyout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  closeFlyout = () => {
    this.setState({ open: false });
    this.props.onClickOutside();
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
        open={
          typeof this.props.open === "boolean"
            ? this.props.open
            : this.state.open
        }
        onClickOutside={this.closeFlyout}
        content={this.props.content}
        maxHeight={this.props.maxHeight}
      >
        {target}
      </FlyoutAdapter>
    );
  }
}

Flyout.defaultProps = {
  onClickOutside: () => {}
};

Flyout.propTypes = {
  /**
   * Where the flyout will be anchored relative to target
   */
  anchorPoint: PropTypes.oneOf(VanillaFlyout.AvailableAnchorPoints),
  /**
   * Target component to open the flyout
   */
  children: PropTypes.node,
  /**
   * Content for the flyout
   */
  content: PropTypes.node,
  /**
   * Max height of the flyout content, in pixels
   */
  maxHeight: PropTypes.number,
  /**
   * Function to call when clicking outside of the flyout
   */
  onClickOutside: PropTypes.func,
  /**
   * When provided, it overrides the flyout's open state
   */
  open: PropTypes.bool
};

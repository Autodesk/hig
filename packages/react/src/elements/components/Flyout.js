import PropTypes from "prop-types";
import React, { Component } from "react";
import { Flyout as VanillaFlyout } from "hig-vanilla";
import FlyoutAdapter from "../../adapters/FlyoutAdapter";

export default class Flyout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.initiallyOpen
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.open && this.state.open !== prevState.open) {
      this.props.onClose();
    }
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
        maxHeight={this.props.maxHeight}
      >
        {target}
      </FlyoutAdapter>
    );
  }
}

Flyout.defaultProps = {
  initiallyOpen: false,
  onClose: () => {}
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
   * When true, renders the flyout open on mount
   */
  initiallyOpen: PropTypes.bool,
  /**
   * Max height of the flyout content, in pixels
   */
  maxHeight: PropTypes.number,
  /**
   * Function to call when flyout closes
   */
  onClose: PropTypes.func
};

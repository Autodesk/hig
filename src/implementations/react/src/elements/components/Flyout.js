import * as PropTypes from "prop-types";
import React from "react";
import FlyoutAdapter from "../../adapters/FlyoutAdapter";

class Flyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTargetEl = el => {
    this.setState({ target: el });
  };

  setContentEl = el => {
    this.setState({ content: el });
  };

  closeFlyout = () => {
    this.setState({ isOpen: false });
  };

  openFlyout = event => {
    event.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <FlyoutAdapter
        anchorPoint={this.props.anchorPoint}
        open={this.props.open}
        onClickOutside={this.closeFlyout}
        target={this.state.target}
        content={this.state.content}
      >
        <div ref={this.setTargetEl}>{this.props.children}</div>
        <div ref={this.setContentEl} >{this.props.content}</div>
      </FlyoutAdapter>
    );
  }
}

Flyout.childContextTypes = {
  parent: PropTypes.shape({
    appendChild: PropTypes.func
  })
};

export default Flyout;

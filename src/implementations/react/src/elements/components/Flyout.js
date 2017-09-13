import * as PropTypes from "prop-types";
import React from "react";
import * as HIG from 'hig-vanilla';
import FlyoutAdapter from "../../adapters/FlyoutAdapter";

class Flyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    anchorPoint: PropTypes.oneOf(HIG.Flyout.AvailableAnchorPoints),
    children: PropTypes.node,
    content: PropTypes.node
  }

  static __docgenInfo = {
    props: {
      anchorPoint: {
        description: "where the flyout will be anchored relative to target"
      },
      children: { description: "target component to open the flyout" },
      content: { description: "content for the flyout" },
    }
  };

  static childContextTypes = {
    parent: PropTypes.shape({
      appendChild: PropTypes.func
    })
  }

  setTargetEl = el => {
    this.setState({ target: el });
  };

  setContentEl = el => {
    this.setState({ content: el });
  };

  closeFlyout = () => {
    this.setState({ open: false });
  };

  openFlyout = event => {
    event.preventDefault();
    this.setState({ open: true });
  };

  render() {
    return (
      <FlyoutAdapter
        anchorPoint={this.props.anchorPoint}
        open={this.state.open}
        onClickOutside={this.closeFlyout}
        target={this.state.target}
        content={this.state.content}
      >
        <div ref={this.setTargetEl}>{React.cloneElement(this.props.children, { onClick: this.openFlyout})}</div>
        <div ref={this.setContentEl} >{this.props.content}</div>
      </FlyoutAdapter>
    );
  }
}

export default Flyout;

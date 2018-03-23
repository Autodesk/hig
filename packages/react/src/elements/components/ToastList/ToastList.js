import React from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";
import "./toastList.scss";

const MAX_TOASTS_ONSCREEN = 3;

export default class ToastList extends React.Component {
  enterAnimation = () => ({
    from: {
      transform: "translateY(1in)",
      opacity: 0.1
    },
    to: {
      transform: ""
    }
  });

  leaveAnimation = () => ({
    from: {
      transform: ""
    },
    to: {
      transform: "translateY(-1in)",
      opacity: 0.1
    }
  });

  render() {
    return (
      <FlipMove
        className="hig__toast-list"
        duration={1000}
        easing="ease-out"
        appearAnimation={this.enterAnimation()}
        enterAnimation={this.enterAnimation()}
        leaveAnimation={this.leaveAnimation()}
      >
        {this.props.children.slice(0, MAX_TOASTS_ONSCREEN)}
      </FlipMove>
    );
  }
}

ToastList.propTypes = {
  /**
   * A list of Toast elements to render
   */
  children: PropTypes.node
};

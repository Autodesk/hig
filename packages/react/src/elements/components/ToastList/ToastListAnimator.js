import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import FlipMove from "react-flip-move";
import "./toastList.scss";

const _ANIMATION_DURATION = 1000;
const _ANIMATION_STAGGER_DELAY_BY = 1000;
export default class ToastListAnimator extends React.Component {
  render() {
    const toastListClasses = cx("hig__toast-list", {
      [`hig__toast-list--position-${this.props.position}`]: this.props.position
    });

    const enterAnimation = {
      from: {
        transform: `translateY(${
          this.props.position === "top" ? "-1in" : "1in"
        })`,
        opacity: 0.0
      },
      to: {
        transform: ""
      }
    };

    const leaveAnimation = {
      from: {
        transform: ""
      },
      to: {
        transform: `translateY(${
          this.props.position === "top" ? "-1in" : "1in"
        })`,
        opacity: 0.0
      }
    };

    return (
      <FlipMove
        className={toastListClasses}
        duration={_ANIMATION_DURATION}
        staggerDelayBy={_ANIMATION_STAGGER_DELAY_BY}
        easing="ease-out"
        appearAnimation={enterAnimation}
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
      >
        {this.props.children}
      </FlipMove>
    );
  }
}

ToastListAnimator.propTypes = {
  /**
   * Whether to render the list of notifications at the top or bottom of the screen.
   * The list will be sorted such that the most recently added notification will
   *  appear closest to the page edge.
   */
  position: PropTypes.oneOf(["top", "bottom"]),
  /**
   * A list of Toast elements to render
   */
  children: PropTypes.node
};

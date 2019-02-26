import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import FlipMove from "react-flip-move";
import { AVAILABLE_PLACEMENTS } from "../placements";

import stylesheet from "./NotificationsToastListAnimator.stylesheet";

const _ANIMATION_DURATION = 1000;
const _ANIMATION_STAGGER_DELAY_BY = 1000;

const offScreenStyles = ({ placement }) => ({
  transform: `translateY(${placement === "top" ? "-36px" : "36px"})`,
  opacity: 0
});

const onScreenStyles = () => ({
  transform: ""
});

export default class NotificationsToastListAnimator extends Component {
  render() {
    const { placement } = this.props;
    const styles = stylesheet(placement);

    const enterAnimation = {
      from: offScreenStyles(this.props),
      to: onScreenStyles()
    };

    const leaveAnimation = {
      from: onScreenStyles(),
      to: offScreenStyles(this.props)
    };

    return (
      <FlipMove
        className={css(styles.toastList)}
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

NotificationsToastListAnimator.propTypes = {
  /**
   * Determines the placement of the ToastList.
   * The list will be sorted such that the most recently added notification will
   *  appear closest to the page edge.
   */
  placement: PropTypes.oneOf(AVAILABLE_PLACEMENTS),
  /**
   * A list of Toast elements to render
   */
  children: PropTypes.node
};

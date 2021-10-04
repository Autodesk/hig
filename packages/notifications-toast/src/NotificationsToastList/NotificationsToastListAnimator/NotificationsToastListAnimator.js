import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import FlipMove from "react-flip-move";

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

const NotificationsToastListAnimator = props => {
  const { children, ...otherProps } = props;
  const { className } = otherProps;
  const styles = stylesheet(props);

  const enterAnimation = {
    from: offScreenStyles(props),
    to: onScreenStyles()
  };

  const leaveAnimation = {
    from: onScreenStyles(),
    to: offScreenStyles(props)
  };

  return (
    <FlipMove
      className={cx([css(styles.toastList), className])}
      duration={_ANIMATION_DURATION}
      staggerDelayBy={_ANIMATION_STAGGER_DELAY_BY}
      easing="ease-out"
      appearAnimation={enterAnimation}
      enterAnimation={enterAnimation}
      leaveAnimation={leaveAnimation}
    >
      {children}
    </FlipMove>
  );
};

NotificationsToastListAnimator.displayName = "NotificationsToastListAnimator";

NotificationsToastListAnimator.propTypes = {
  /**
   * A list of Toast elements to render
   */
  children: PropTypes.node
};

export default NotificationsToastListAnimator;

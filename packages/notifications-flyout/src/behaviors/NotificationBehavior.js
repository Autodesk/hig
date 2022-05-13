import React, { useState, useRef } from "react";
import Transition from "react-transition-group/Transition";
import PropTypes from "prop-types";

const TRANSITION_DURATION = 300;

/**
 * @typedef {Object} Payload
 * @property {string} transitionStatus
 * @property {function(MouseEvent): void} handleDismissButtonClick
 */

const NotificationBehavior = (props) => {
  const [height, setHeight] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  /**
   * @param {HTMLDivElement} containerRef
   */
  const refContainer = (containerRefParams) => {
    containerRef.current = containerRefParams;
  };

  const handleExit = () => {
    const { onDismiss } = props;

    if (onDismiss) onDismiss();
  };

  /**
   * Sets the current height of the notification
   * so that the height transition can occur
   */
  const prepareHideTransition = () =>
    new Promise((resolve) => {
      setHeight(`${containerRef.current.clientHeight}px`);
      window.requestAnimationFrame(resolve);
    });

  /**
   * Begins the hide transition by setting the `isVisible` prop
   * The height is then controlled via CSS in the `NotificationPresenter`
   *
   * This method calls `requestAnimationFrame` again to ensure that a repaint occurs.
   * @see https://stackoverflow.com/a/42302185
   */
  const startHideTransition = () => {
    window.requestAnimationFrame(() => {
      setHeight("");
      setIsVisible(false);
    });
  };

  const hide = () => {
    prepareHideTransition().then(() => startHideTransition());
  };

  const handleDismissButtonClick = () => {
    hide();
  };

  const innerRef = refContainer;
  const { children } = props;

  return (
    <Transition
      in={isVisible}
      onExited={handleExit}
      timeout={TRANSITION_DURATION}
    >
      {(transitionStatus) =>
        children({
          handleDismissButtonClick,
          height,
          innerRef,
          transitionStatus,
        })
      }
    </Transition>
  );
};

NotificationBehavior.displayName = "NotificationBehavior";

NotificationBehavior.propTypes = {
  /** Notification content */
  children: PropTypes.func.isRequired,
  /** A callback called when user dismisses a featured notification */
  onDismiss: PropTypes.func,
};

export default NotificationBehavior;

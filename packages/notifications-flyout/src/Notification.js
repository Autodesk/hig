import PropTypes from "prop-types";
import React from "react";
import { ControlBehavior } from "@hig/behaviors";

import NotificationBehavior from "./behaviors/NotificationBehavior";
import NotificationPresenter from "./presenters/NotificationPresenter";

const Notification = (props) => {
  /**
   * @param {NotificationShape} shape
   * @returns {import("react").ReactElement}
   */
  const renderChildren = () => {
    const { children, hideFlyout, onDismiss: dismiss } = props;

    if (typeof children !== "function") {
      return children;
    }

    return children({ dismiss, hideFlyout });
  };

  const {
    dismissButtonTitle,
    featured,
    image,
    onDismiss,
    onNotificationClick,
    onMouseEnter,
    onMouseLeave,
    // Featured notifications show the dismiss button by default
    showDismissButton = featured,
    stylesheet,
    timestamp,
    type,
    unread,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <NotificationBehavior onDismiss={onDismiss}>
      {({ handleDismissButtonClick, height, innerRef, transitionStatus }) => (
        <ControlBehavior
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {({
            hasHover,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
          }) => (
            <NotificationPresenter
              className={className}
              dismissButtonTitle={dismissButtonTitle}
              featured={featured}
              hasHover={hasHover}
              height={height}
              image={image}
              innerRef={innerRef}
              onDismissButtonClick={handleDismissButtonClick}
              onNotificationClick={onNotificationClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              showDismissButton={showDismissButton}
              stylesheet={stylesheet}
              timestamp={timestamp}
              transitionStatus={transitionStatus}
              type={type}
              unread={unread}
            >
              {renderChildren()}
            </NotificationPresenter>
          )}
        </ControlBehavior>
      )}
    </NotificationBehavior>
  );
};

Notification.displayName = "Notification";

Notification.propTypes = {
  /** Notification content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Title HTML attribute for the dismiss button */
  dismissButtonTitle: PropTypes.string,
  /** Determines whether the notification is featured */
  featured: PropTypes.bool,
  /** An action provided hide the flyout. This is provided to the `children` render prop */
  hideFlyout: PropTypes.func,
  /** An image to display such as an avatar or and icon */
  image: PropTypes.node,
  /** A callback called when user dismisses a featured notification */
  onDismiss: PropTypes.func,
  /** A callback when the user clicks anywhere within the notification */
  onNotificationClick: PropTypes.func,
  /**
   * Triggers when the user's mouse is over the notification
   */
  onMouseEnter: PropTypes.func,
  /**
   * Triggers when the user's mouse is no longer over the notification
   */
  onMouseLeave: PropTypes.func,
  /** Determines whether the dismiss button is shown */
  showDismissButton: PropTypes.bool,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
  /** Timestamp component */
  timestamp: PropTypes.node,
  /** Determines notification variant */
  type: PropTypes.string,
  /** Determines whether notification has not been read */
  unread: PropTypes.bool,
};

Notification.defaultProps = {
  /**
   * This is an action that's provided to the consumer,
   * as a result a value must always be available.
   */
  hideFlyout: () => {},
  onNotificationClick: () => {},
};

export default Notification;

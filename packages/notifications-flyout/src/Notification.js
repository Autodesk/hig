import PropTypes from "prop-types";
import React, { Component } from "react";
import { ControlBehavior } from "@hig/behaviors";

import NotificationBehavior from "./behaviors/NotificationBehavior";
import NotificationPresenter from "./presenters/NotificationPresenter";

export default class Notification extends Component {
  static propTypes = {
    /** Notification content */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Determines whether the notification is featured */
    featured: PropTypes.bool,
    /** An action provided hide the flyout. This is provided to the `children` render prop */
    hideFlyout: PropTypes.func,
    /** An image to display such as an avatar or and icon */
    image: PropTypes.node,
    /** A callback called when user dismisses a featured notification */
    onDismiss: PropTypes.func,
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
    unread: PropTypes.bool
  };

  static defaultProps = {
    /**
     * This is an action that's provided to the consumer,
     * as a result a value must always be available.
     */
    hideFlyout: () => {}
  };

  /**
   * @param {NotificationShape} shape
   * @returns {import("react").ReactElement}
   */
  renderChildren() {
    const { children, hideFlyout, onDismiss: dismiss } = this.props;

    if (typeof children !== "function") {
      return children;
    }

    return children({ dismiss, hideFlyout });
  }

  render() {
    const {
      featured,
      image,
      onDismiss,
      onMouseEnter,
      onMouseLeave,
      // Featured notifications show the dismiss button by default
      showDismissButton = featured,
      stylesheet,
      timestamp,
      type,
      unread
    } = this.props;

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
              onMouseLeave: handleMouseLeave
            }) => (
              <NotificationPresenter
                featured={featured}
                hasHover={hasHover}
                height={height}
                image={image}
                innerRef={innerRef}
                onDismissButtonClick={handleDismissButtonClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                showDismissButton={showDismissButton}
                stylesheet={stylesheet}
                timestamp={timestamp}
                transitionStatus={transitionStatus}
                type={type}
                unread={unread}
              >
                {this.renderChildren()}
              </NotificationPresenter>
            )}
          </ControlBehavior>
        )}
      </NotificationBehavior>
    );
  }
}

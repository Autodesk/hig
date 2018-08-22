import PropTypes from "prop-types";
import React, { Component } from "react";

import NotificationBehavior from "./behaviors/NotificationBehavior";
import NotificationPresenter from "./presenters/NotificationPresenter";

export default class Notification extends Component {
  static propTypes = {
    /** Notification content */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Determines whether the notification is featured */
    featured: PropTypes.bool,
    /** An action provided hide the flyout. This is provided to the `children` render prop */
    hideFlyout: PropTypes.func.isRequired,
    /** An image to display such as an avatar or and icon */
    image: PropTypes.node,
    /** A callback called when user dismisses a featured notification */
    onDismiss: PropTypes.func,
    /** Determines whether the dismiss button is shown */
    showDismissButton: PropTypes.bool,
    /** Timestamp component */
    timestamp: PropTypes.node,
    /** Determines notification variant */
    type: PropTypes.string,
    /** Determines whether notification has not been read */
    unread: PropTypes.bool
  };

  static defaultProps = {
    hideFlyout: () => {}
  };

  dismiss = () => {
    const { onDismiss } = this.props;

    if (onDismiss) onDismiss();
  };

  /**
   * @param {NotificationShape} shape
   * @returns {import("react").ReactElement}
   */
  renderChildren() {
    const { children, hideFlyout } = this.props;
    const { dismiss } = this;

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
      // Featured notifications show the dismiss button by default
      showDismissButton = featured,
      timestamp,
      type,
      unread
    } = this.props;

    return (
      <NotificationBehavior onDismiss={onDismiss}>
        {({ handleDismissButtonClick, height, innerRef, transitionStatus }) => (
          <NotificationPresenter
            featured={featured}
            height={height}
            image={image}
            innerRef={innerRef}
            onDismissButtonClick={handleDismissButtonClick}
            showDismissButton={showDismissButton}
            timestamp={timestamp}
            transitionStatus={transitionStatus}
            type={type}
            unread={unread}
          >
            {this.renderChildren()}
          </NotificationPresenter>
        )}
      </NotificationBehavior>
    );
  }
}

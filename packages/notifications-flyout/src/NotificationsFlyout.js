import React from "react";
import PropTypes from "prop-types";
import { combineEventHandlers } from "@hig/utils";
import Flyout, { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";

import EmptyStatePresenter from "./presenters/EmptyStatePresenter";
import IndicatorPresenter from "./presenters/IndicatorPresenter";
import NotificationFlyoutBehavior from "./behaviors/NotificationFlyoutBehavior";

import Notification from "./Notification";
import Panel from "./Panel";

/** @typedef {import("./behaviors/parseNotifications").ParsedNotification} ParsedNotification */

/**
 * @param {Object} payload
 * @returns {function(ParsedNotification): JSX}
 */
function createNotificationRenderer({ hideFlyout, dismissNotification }) {
  /* eslint-disable-next-line react/prop-types */
  return function renderNotification(notification) {
    const {
      content,
      dismissButtonTitle,
      featured,
      id,
      image,
      key,
      onDismiss,
      onNotificationClick,
      showDismissButton,
      stylesheet,
      timestamp,
      type,
      unread,
      ...otherProps
    } = notification;
    const { className } = otherProps;

    const handleDismiss = combineEventHandlers(onDismiss, () =>
      dismissNotification(id)
    );

    return (
      <Notification
        className={className}
        dismissButtonTitle={dismissButtonTitle}
        featured={featured}
        hideFlyout={hideFlyout}
        image={image}
        key={key}
        onDismiss={handleDismiss}
        onNotificationClick={onNotificationClick}
        showDismissButton={showDismissButton}
        stylesheet={stylesheet}
        timestamp={timestamp}
        type={type}
        unread={unread}
      >
        {content}
      </Notification>
    );
  };
}

function createPanelRenderer({
  emptyMessage,
  dismissNotification,
  notifications,
  loading,
  heading,
  stylesheet
}) {
  return function renderPanel({
    /* eslint-disable react/prop-types */
    hideFlyout,
    handleScroll,
    innerRef,
    transitionStatus
  }) {
    const isEmpty = notifications.length === 0;

    return (
      <Panel
        heading={heading}
        innerRef={innerRef}
        loading={loading}
        onScroll={handleScroll}
        transitionStatus={transitionStatus}
        stylesheet={stylesheet}
      >
        {isEmpty ? (
          <EmptyStatePresenter message={emptyMessage} stylesheet={stylesheet} />
        ) : (
          notifications.map(
            createNotificationRenderer({ hideFlyout, dismissNotification })
          )
        )}
      </Panel>
    );
  };
}

export default function NotificationsFlyout(props) {
  const {
    alterCoordinates,
    anchorPoint,
    children,
    emptyMessage,
    fallbackAnchorPoints,
    heading,
    indicatorTitle,
    loading,
    onClick,
    onClickOutside,
    onScroll,
    open,
    notifications: notificationsInput = children,
    unreadCount: controlledUnreadCount,
    stylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <NotificationFlyoutBehavior
      unreadCount={controlledUnreadCount}
      notifications={notificationsInput}
    >
      {({
        dismissNotification,
        handleClose,
        notifications,
        showUnreadCount,
        unreadCount
      }) => (
        <Flyout
          alterCoordinates={alterCoordinates}
          anchorPoint={anchorPoint}
          className={className}
          fallbackAnchorPoints={fallbackAnchorPoints}
          onClickOutside={onClickOutside}
          onClose={handleClose}
          onScroll={onScroll}
          open={open}
          panel={createPanelRenderer({
            emptyMessage,
            dismissNotification,
            notifications,
            loading,
            heading,
            stylesheet
          })}
          stylesheet={stylesheet}
        >
          {({ handleClick }) => (
            <IndicatorPresenter
              className={className}
              onClick={combineEventHandlers(onClick, handleClick)}
              count={unreadCount}
              showCount={showUnreadCount}
              title={indicatorTitle}
              stylesheet={stylesheet}
            />
          )}
        </Flyout>
      )}
    </NotificationFlyoutBehavior>
  );
}

NotificationsFlyout.defaultProps = {
  anchorPoint: anchorPoints.TOP_RIGHT
};

NotificationsFlyout.propTypes = {
  /** Manipulate flyout coordinates before each render */
  alterCoordinates: PropTypes.func,
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
  /** Rendered notifications. It can contain one or more <Notification /> components. */
  children: PropTypes.node,
  /** The message displayed when there are no notifications */
  emptyMessage: PropTypes.string,
  /**
   * When the flyout overflows the viewport, it'll attempt to
   * use the given anchor points in order to keep the flyout
   * within the viewport.
   */
  fallbackAnchorPoints: PropTypes.arrayOf(
    PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
  ),
  /** Flyout panel heading */
  heading: PropTypes.string,
  /** Indicator button title */
  indicatorTitle: PropTypes.string,
  /** Determines whether the loading animation is shown */
  loading: PropTypes.bool,
  /**
   * Rendered notifications.
   * It takes precedent over `children`, and accepts an array
   * containing any combination of <Notification /> components
   * and Notification models
   */
  notifications: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.object])
  ),
  /** Function called when the flyout is opened */
  onClick: PropTypes.func,
  /** Function called when the flyout is open, and a click event occurs outside the flyout */
  onClickOutside: PropTypes.func,
  /** Function called when the flyout panel is scrolled */
  onScroll: PropTypes.func,
  /** When provided, it overrides the flyout's open state */
  open: PropTypes.bool,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
  /** When provided, it overrides the derived unread notification count */
  unreadCount: PropTypes.number
};

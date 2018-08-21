import React from "react";
import PropTypes from "prop-types";

import Flyout, { AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
import "@hig/flyout/build/index.css";

import NotificationFlyoutBehavior from "./behaviors/NotificationFlyoutBehavior";
import IndicatorPresenter from "./presenters/IndicatorPresenter";

import Notification from "./Notification";
import Panel from "./Panel";

function createNotificationRenderer({ hideFlyout, dismissNotification }) {
  /* eslint-disable-next-line react/prop-types */
  return function renderNotification({ id, key, content, ...otherProps }) {
    return (
      <Notification
        {...otherProps}
        hideFlyout={hideFlyout}
        id={id}
        key={key}
        onDismiss={() => dismissNotification(id)}
      >
        {content}
      </Notification>
    );
  };
}

function createPanelRenderer({
  dismissNotification,
  notifications,
  loading,
  heading
}) {
  /* eslint-disable-next-line react/prop-types */
  return function renderPanel({ hideFlyout, handleScroll, innerRef }) {
    return (
      <Panel
        heading={heading}
        innerRef={innerRef}
        loading={loading}
        onScroll={handleScroll}
      >
        {notifications.map(
          createNotificationRenderer({ hideFlyout, dismissNotification })
        )}
      </Panel>
    );
  };
}

export default function NotificationsFlyout(props) {
  const {
    anchorPoint,
    heading,
    indicatorTitle,
    loading,
    onClickOutside,
    onScroll,
    open,
    children,
    unreadCount: controlledUnreadCount,
    notifications: rawNotifications = children
  } = props;

  return (
    <NotificationFlyoutBehavior
      unreadCount={controlledUnreadCount}
      notifications={rawNotifications}
    >
      {({
        dismissNotification,
        handleClose,
        notifications,
        showUnreadCount,
        unreadCount
      }) => (
        <Flyout
          anchorPoint={anchorPoint}
          onClickOutside={onClickOutside}
          onClose={handleClose}
          onScroll={onScroll}
          open={open}
          panel={createPanelRenderer({
            dismissNotification,
            notifications,
            loading,
            heading
          })}
        >
          {({ handleClick }) => (
            <IndicatorPresenter
              onClick={handleClick}
              count={unreadCount}
              showCount={showUnreadCount}
              title={indicatorTitle}
            />
          )}
        </Flyout>
      )}
    </NotificationFlyoutBehavior>
  );
}

NotificationsFlyout.propTypes = {
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
  /** Rendered notifications */
  children: PropTypes.node,
  /** Flyout panel heading */
  heading: PropTypes.string,
  /** Indicator button title */
  indicatorTitle: PropTypes.string,
  /** Determines whether the loading animation is shown */
  loading: PropTypes.bool,
  /** Rendered notifications */
  notifications: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.shape({})])
  ),
  /** Function called when the flyout is open, and a click event occurs outside the flyout */
  onClickOutside: PropTypes.func,
  /** Function called when the flyout panel is scrolled */
  onScroll: PropTypes.func,
  /** When provided, it overrides the flyout's open state */
  open: PropTypes.bool,
  /** When provided, it overrides the derived unread notification count */
  unreadCount: PropTypes.number
};

import React from "react";
import { offsetContainerVertical, offsetPanelHorizontal } from "@hig/flyout";
import NotificationsFlyout, { anchorPoints } from "@hig/notifications-flyout";
import { createCustomClassNames } from "@hig/utils";

import ActionPresenter from "./presenters/ActionPresenter";

/** @typedef {import("@hig/flyout").Coordinates} Coordinates */

const NotificationsAction = (props) => {
  const { children, ...otherProps } = props;
  const { className, stylesheet } = otherProps;
  const topNavNotificationsFlyoutClassName = createCustomClassNames(
    className,
    "top-nav__notifications-flyout"
  );

  return (
    <ActionPresenter stylesheet={stylesheet} className={className}>
      <NotificationsFlyout
        {...otherProps}
        stylesheet={stylesheet}
        className={topNavNotificationsFlyoutClassName}
      >
        {children}
      </NotificationsFlyout>
    </ActionPresenter>
  );
};

NotificationsAction.displayName = "NotificationsAction";

NotificationsAction.propTypes = NotificationsFlyout.propTypes;

NotificationsAction.defaultProps = {
  /**
   * @param {Coordinates} coordinates
   * @returns {Coordinates}
   */
  alterCoordinates(coordinates) {
    return offsetPanelHorizontal(offsetContainerVertical(coordinates, 8), 93);
  },
  anchorPoint: anchorPoints.TOP_RIGHT,
  fallbackAnchorPoints: [],
};

export default NotificationsAction;

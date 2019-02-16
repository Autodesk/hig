import React, { Component } from "react";
import { offsetContainerVertical, offsetPanelHorizontal } from "@hig/flyout";
import NotificationsFlyout, { anchorPoints } from "@hig/notifications-flyout";

import ActionPresenter from "./presenters/ActionPresenter";

/** @typedef {import("@hig/flyout").Coordinates} Coordinates */

export default class NotificationsAction extends Component {
  static propTypes = NotificationsFlyout.propTypes;

  static defaultProps = {
    /**
     * @param {Coordinates} coordinates
     * @returns {Coordinates}
     */
    alterCoordinates(coordinates) {
      return offsetPanelHorizontal(offsetContainerVertical(coordinates, 8), 93);
    },
    anchorPoint: anchorPoints.TOP_RIGHT,
    fallbackAnchorPoints: []
  };

  render() {
    const { children, ...otherProps } = this.props;

    return (
      <ActionPresenter>
        <NotificationsFlyout {...otherProps}>{children}</NotificationsFlyout>
      </ActionPresenter>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { combineEventHandlers } from "@hig/utils";
import Flyout, {
  anchorPoints,
  AVAILABLE_ANCHOR_POINTS,
  offsetContainerVertical,
  offsetPanelHorizontal
} from "@hig/flyout";

import { renderActionFlyoutPanel } from "./presenters/ActionFlyoutPanelPresenter";
import ActionPresenter from "./presenters/ActionPresenter";
import NavButtonPresenter from "./presenters/NavButtonPresenter";

/** @typedef {import("@hig/flyout").Coordinates} Coordinates */

export default class NavAction extends Component {
  static propTypes = {
    /** Manipulate flyout coordinates before each render */
    alterCoordinates: PropTypes.func,
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.string,
    /** Content to render inside the pull down flyout */
    children: PropTypes.node,
    /**
     * When the flyout overflows the viewport, it'll attempt to
     * use the given anchor points in order to keep the flyout
     * within the viewport
     */
    fallbackAnchorPoints: PropTypes.arrayOf(
      PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
    ),
    /** Icon to be displayed in the top bar for the pull down, default is List */
    icon: PropTypes.element,
    /** Callback when the flyout is opened */
    onClick: PropTypes.func,
    /** Title text displayed in the tooltip on button hover */
    title: PropTypes.string
  };

  static defaultProps = {
    /**
     * @param {Coordinates} coordinates
     * @returns {Coordinates}
     */
    alterCoordinates(coordinates) {
      return offsetPanelHorizontal(offsetContainerVertical(coordinates, 8), 57);
    },
    anchorPoint: anchorPoints.TOP_RIGHT,
    fallbackAnchorPoints: []
  };

  render() {
    const {
      alterCoordinates,
      anchorPoint,
      children,
      fallbackAnchorPoints,
      icon,
      onClick,
      title
    } = this.props;

    return (
      <ActionPresenter>
        <Flyout
          alterCoordinates={alterCoordinates}
          anchorPoint={anchorPoint}
          content={children}
          fallbackAnchorPoints={fallbackAnchorPoints}
          onClick={onClick}
          panel={renderActionFlyoutPanel}
        >
          {({ handleClick }) => (
            <NavButtonPresenter
              icon={icon}
              onClick={combineEventHandlers(onClick, handleClick)}
              title={title}
            />
          )}
        </Flyout>
      </ActionPresenter>
    );
  }
}

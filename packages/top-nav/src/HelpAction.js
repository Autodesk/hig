import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  anchorPoints,
  AVAILABLE_ANCHOR_POINTS,
  offsetContainerVertical,
  offsetPanelHorizontal
} from "@hig/flyout";
import { Help16, Help24 } from "@hig/icons";
import ThemeContext from "@hig/theme-context";

import NavAction from "./NavAction";

/** @typedef {import("@hig/flyout").Coordinates} Coordinates */

export default class HelpAction extends Component {
  static propTypes = {
    /** Manipulate flyout coordinates before each render */
    alterCoordinates: PropTypes.func,
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.string,
    /** Content to render inside the help flyout */
    children: PropTypes.node,
    /**
     * When the flyout overflows the viewport, it'll attempt to
     * use the given anchor points in order to keep the flyout
     * within the viewport
     */
    fallbackAnchorPoints: PropTypes.arrayOf(
      PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
    ),
    /** Callback when the flyout is opened */
    onClick: PropTypes.func,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func
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
      onClick,
      stylesheet
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ metadata }) => {
          const title = "View help";
          const HelpIcon =
            metadata.densityId === "high-density" ? Help16 : Help24;
          return (
            <NavAction
              alterCoordinates={alterCoordinates}
              anchorPoint={anchorPoint}
              fallbackAnchorPoints={fallbackAnchorPoints}
              icon={<HelpIcon />}
              onClick={onClick}
              stylesheet={stylesheet}
              title={title}
            >
              {children}
            </NavAction>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

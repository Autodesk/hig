import React from "react";
import PropTypes from "prop-types";
import { combineEventHandlers, createCustomClassNames } from "@hig/utils";
import Flyout, {
  anchorPoints,
  AVAILABLE_ANCHOR_POINTS,
  offsetContainerVertical,
  offsetPanelHorizontal,
} from "@hig/flyout";

import { renderActionFlyoutPanel } from "./presenters/ActionFlyoutPanelPresenter";
import ActionPresenter from "./presenters/ActionPresenter";
import NavButtonPresenter from "./presenters/NavButtonPresenter";

/** @typedef {import("@hig/flyout").Coordinates} Coordinates */

const NavAction = (props) => {
  const {
    alterCoordinates,
    anchorPoint,
    children,
    fallbackAnchorPoints,
    icon,
    onClick,
    stylesheet,
    title,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const topNavNavActionFlyoutClassName = createCustomClassNames(
    className,
    "top-nav__nav-action-flyout"
  );
  const topNavNavActionButtonClassName = createCustomClassNames(
    className,
    "top-nav__nav-action-button"
  );

  return (
    <ActionPresenter className={className} stylesheet={stylesheet}>
      <Flyout
        alterCoordinates={alterCoordinates}
        anchorPoint={anchorPoint}
        className={topNavNavActionFlyoutClassName}
        content={children}
        fallbackAnchorPoints={fallbackAnchorPoints}
        onClick={onClick}
        panel={renderActionFlyoutPanel}
        stylesheet={stylesheet}
      >
        {({ handleClick }) => (
          <NavButtonPresenter
            className={topNavNavActionButtonClassName}
            icon={icon}
            onClick={combineEventHandlers(onClick, handleClick)}
            title={title}
          />
        )}
      </Flyout>
    </ActionPresenter>
  );
};

NavAction.displayName = "NavAction";

NavAction.propTypes = {
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
  title: PropTypes.string,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

NavAction.defaultProps = {
  /**
   * @param {Coordinates} coordinates
   * @returns {Coordinates}
   */
  alterCoordinates(coordinates) {
    return offsetPanelHorizontal(offsetContainerVertical(coordinates, 8), 57);
  },
  anchorPoint: anchorPoints.TOP_RIGHT,
  fallbackAnchorPoints: [],
};

export default NavAction;

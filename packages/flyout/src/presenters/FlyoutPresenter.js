import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {
  EXITED,
  ENTERING,
  ENTERED,
  EXITING
} from "react-transition-group/Transition";

import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "../anchorPoints";
import "./FlyoutPresenter.scss";

const availableTransitionStatuses = [EXITED, ENTERING, ENTERED, EXITING];

const transitionStateToModifier = {
  [EXITED]: "hig__flyout-v1--exited",
  [EXITING]: "hig__flyout-v1--exiting"
};

const anchorPointToModifier = {
  [anchorPoints.TOP_LEFT]: "hig__flyout-v1--top-left",
  [anchorPoints.TOP_CENTER]: "hig__flyout-v1--top-center",
  [anchorPoints.TOP_RIGHT]: "hig__flyout-v1--top-right",
  [anchorPoints.RIGHT_TOP]: "hig__flyout-v1--right-top",
  [anchorPoints.RIGHT_CENTER]: "hig__flyout-v1--right-center",
  [anchorPoints.RIGHT_BOTTOM]: "hig__flyout-v1--right-bottom",
  [anchorPoints.BOTTOM_LEFT]: "hig__flyout-v1--bottom-left",
  [anchorPoints.BOTTOM_CENTER]: "hig__flyout-v1--bottom-center",
  [anchorPoints.BOTTOM_RIGHT]: "hig__flyout-v1--bottom-right",
  [anchorPoints.LEFT_TOP]: "hig__flyout-v1--left-top",
  [anchorPoints.LEFT_CENTER]: "hig__flyout-v1--left-center",
  [anchorPoints.LEFT_BOTTOM]: "hig__flyout-v1--left-bottom"
};

/**
 * @param {import("../getCoordinates").Position} position
 * @returns {import("react").CSSProperties}
 */
function positionToStyle({ top, left }) {
  return {
    top: `${top}px`,
    left: `${left}px`
  };
}

export default function FlyoutPresenter(props) {
  const {
    anchorPoint,
    children,
    panel,
    containerPosition,
    pointerPosition,
    refAction,
    refContainer,
    refWrapper,
    transitionStatus
  } = props;

  const containerStyle = positionToStyle(containerPosition);
  const pointerStyle = positionToStyle(pointerPosition);
  const wrapperClasses = cx([
    "hig__flyout-v1",
    transitionStateToModifier[transitionStatus],
    anchorPointToModifier[anchorPoint]
  ]);

  return (
    <div className={wrapperClasses} ref={refWrapper}>
      <div className="hig__flyout-v1__action" ref={refAction}>
        {children}
      </div>
      <div
        className="hig__flyout-v1__container"
        ref={refContainer}
        style={containerStyle}
      >
        <div
          aria-hidden="true"
          className="hig__flyout-v1__pointer"
          role="presentation"
          style={pointerStyle}
        />
        <div
          className="hig__flyout-v1__pointer-cover"
          role="presentation"
          aria-hidden="true"
        />
        {panel}
      </div>
    </div>
  );
}

FlyoutPresenter.defaultProps = {
  anchorPoint: anchorPoints.TOP_RIGHT,
  containerPosition: { top: 0, left: 0 },
  pointerPosition: { top: 0, left: 0 },
  transitionStatus: EXITED
};

FlyoutPresenter.propTypes = {
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS).isRequired,
  /** Content for the flyout */
  panel: PropTypes.node,
  /** Top position of the container relative to the action */
  containerPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }),
  /** Left position of the container relative to the action */
  pointerPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }),
  /** Reference the action element */
  refAction: PropTypes.func,
  /** Reference the container element */
  refContainer: PropTypes.func,
  /** Reference the wrapper element */
  refWrapper: PropTypes.func,
  /** The status of the container transition */
  transitionStatus: PropTypes.oneOf(availableTransitionStatuses).isRequired,
  /** Target component to open the flyout */
  children: PropTypes.node
};

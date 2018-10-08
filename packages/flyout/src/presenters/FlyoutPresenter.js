import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "../anchorPoints";
import { DEFAULT_COORDINATES } from "../getCoordinates";
import {
  transitionStatuses,
  AVAILABLE_TRANSITION_STATUSES
} from "../transitionStatuses";
import "./FlyoutPresenter.scss";
import PointerPresenter from "./PointerPresenter";
import PointerWrapperPresenter from "./PointerWrapperPresenter";

const transitionStateToModifier = {
  [transitionStatuses.EXITED]: "hig__flyout-v1--exited",
  [transitionStatuses.EXITING]: "hig__flyout-v1--exiting",
  [transitionStatuses.HIDDEN]: "hig__flyout-v1--hidden"
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
    containerPosition,
    panel,
    pointer,
    pointerPosition,
    refAction,
    refPointer,
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
      <div className="hig__flyout-v1__container" style={containerStyle}>
        <PointerWrapperPresenter innerRef={refPointer} style={pointerStyle}>
          {pointer}
        </PointerWrapperPresenter>
        {panel}
      </div>
    </div>
  );
}

FlyoutPresenter.defaultProps = {
  anchorPoint: DEFAULT_COORDINATES.anchorPoint,
  containerPosition: DEFAULT_COORDINATES.containerPosition,
  pointer: <PointerPresenter />,
  pointerPosition: DEFAULT_COORDINATES.pointerPosition,
  transitionStatus: transitionStatuses.EXITED
};

FlyoutPresenter.propTypes = {
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
  /** Content for the flyout */
  panel: PropTypes.node,
  /** Pointer for the flyout */
  pointer: PropTypes.node,
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
  /** Reference the pointer element */
  refPointer: PropTypes.func,
  /** Reference the wrapper element */
  refWrapper: PropTypes.func,
  /** The status of the container transition */
  transitionStatus: PropTypes.oneOf(AVAILABLE_TRANSITION_STATUSES),
  /** Target component to open the flyout */
  children: PropTypes.node
};

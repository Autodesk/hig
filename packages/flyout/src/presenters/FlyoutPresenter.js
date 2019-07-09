import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { AVAILABLE_ANCHOR_POINTS } from "../anchorPoints";
import { DEFAULT_COORDINATES } from "../getCoordinates";
import {
  transitionStatuses,
  AVAILABLE_TRANSITION_STATUSES
} from "../transitionStatuses";
import stylesheet from "./stylesheet";
import PointerPresenter from "./PointerPresenter";
import PointerWrapperPresenter from "./PointerWrapperPresenter";

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
    containerPosition,
    children,
    panel,
    pointer,
    pointerPosition,
    refAction,
    refPointer,
    refWrapper,
    transitionStatus,
    ...otherProps
  } = props;

  const containerStyle = positionToStyle(containerPosition);
  const pointerStyle = positionToStyle(pointerPosition);

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { transitionStatus, anchorPoint },
          resolvedRoles
        );

        const { className } = otherProps;
        const classNameArray = className
          ? className.split(" ").map(name => name.trim())
          : [];

        return (
          <div
            className={cx(css(styles.flyoutWrapper), className)}
            ref={refWrapper}
          >
            <div
              className={cx(
                css(styles.flyoutAction),
                classNameArray.map(name => `${name}-action`)
              )}
              ref={refAction}
            >
              {children}
            </div>
            <div
              className={cx(
                css(styles.flyoutContainer),
                classNameArray.map(name => `${name}-container`)
              )}
              style={containerStyle}
            >
              <PointerWrapperPresenter
                innerRef={refPointer}
                anchorPoint={anchorPoint}
                style={pointerStyle}
                className={cx(
                  classNameArray.map(name => `${name}-container__pointer`)
                )}
              >
                {pointer}
              </PointerWrapperPresenter>
              {panel}
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
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
  /** Top/Left position of the container relative to the action */
  containerPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }),
  /** Top/Left position of the pointer relative to the action */
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

import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "../anchorPoints";
import { DEFAULT_COORDINATES } from "../getCoordinates";
import {
  transitionStatuses,
  AVAILABLE_TRANSITION_STATUSES
} from "../transitionStatuses";
import stylesheet from "./stylesheet";
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

export default function FlyoutPresenter(props) {
  const {
    anchorPoint,
    children,
    panel,
    pointer,
    refAction,
    refPanelWrapper,
    refPointer,
    refWrapper,
    transitionStatus
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { transitionStatus, anchorPoint },
          resolvedRoles
        );

        return (
          <div
            className={cx([
              css(styles.flyoutWrapper),
              transitionStateToModifier[transitionStatus],
              anchorPointToModifier[anchorPoint]
            ])}
            ref={refWrapper}
          >
            <div
              className={cx([
                css(styles.flyoutAction),
                "hig__flyout-v1__action"
              ])}
              ref={refAction}
            >
              {children}
            </div>
            <div
              className={cx([
                css(styles.flyoutContainer),
                "hig__flyout-v1__container"
              ])}
              ref={refPanelWrapper}
            >
              <PointerWrapperPresenter
                innerRef={refPointer}
                anchorPoint={anchorPoint}
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
  pointer: <PointerPresenter />,
  transitionStatus: transitionStatuses.EXITED
};

FlyoutPresenter.propTypes = {
  /** Where the flyout will be anchored relative to target */
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS),
  /** Content for the flyout */
  panel: PropTypes.node,
  /** Pointer for the flyout */
  pointer: PropTypes.node,
  /** Reference the action element */
  refAction: PropTypes.func,
  /** Reference the panel wrapper element */
  refPanelWrapper: PropTypes.func,
  /** Reference the pointer element */
  refPointer: PropTypes.func,
  /** Reference the wrapper element */
  refWrapper: PropTypes.func,
  /** The status of the container transition */
  transitionStatus: PropTypes.oneOf(AVAILABLE_TRANSITION_STATUSES),
  /** Target component to open the flyout */
  children: PropTypes.node
};

import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
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
          <div className={css(styles.flyoutWrapper)} ref={refWrapper}>
            <div className={css(styles.flyoutAction)} ref={refAction}>
              {children}
            </div>
            <div className={css(styles.flyoutContainer)} ref={refPanelWrapper}>
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

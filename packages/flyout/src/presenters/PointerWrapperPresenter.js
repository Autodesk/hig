import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import stylesheet from "./stylesheet";
import { AVAILABLE_ANCHOR_POINTS } from "../anchorPoints";

export default function PointerWrapperPresenter({
  children,
  innerRef,
  style,
  anchorPoint,
  ...otherProps
}) {
  const styles = stylesheet({ transitionStatus: null, anchorPoint });
  const { className } = otherProps;

  return (
    <div
      aria-hidden="true"
      className={cx(css(styles.pointerWrapper), className)}
      ref={innerRef}
      role="presentation"
      style={style}
    >
      {children}
    </div>
  );
}

PointerWrapperPresenter.propTypes = {
  children: PropTypes.node,
  innerRef: PropTypes.func,
  /* eslint-disable-next-line react/forbid-prop-types */
  style: PropTypes.object,
  anchorPoint: PropTypes.oneOf(AVAILABLE_ANCHOR_POINTS)
};

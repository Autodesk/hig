import React from "react";
import PropTypes from "prop-types";

import "./PointerWrapperPresenter.scss";

export default function PointerWrapperPresenter({ children, innerRef, style }) {
  return (
    <div
      aria-hidden="true"
      className="hig__flyout-v1__pointer-wrapper"
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
  style: PropTypes.object
};

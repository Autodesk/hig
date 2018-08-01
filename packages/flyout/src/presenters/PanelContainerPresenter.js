import React from "react";
import PropTypes from "prop-types";

import "./PanelContainerPresenter.scss";

export default function PanelContainerPresenter(props) {
  const { children, innerRef, maxHeight } = props;

  return (
    <div
      className="hig__flyout-v1__panel-container"
      ref={innerRef}
      style={{ maxHeight }}
    >
      <div className="hig__flyout-v1__panel-container__inner">{children}</div>
    </div>
  );
}

PanelContainerPresenter.propTypes = {
  children: PropTypes.node,
  innerRef: PropTypes.func,
  maxHeight: PropTypes.number
};

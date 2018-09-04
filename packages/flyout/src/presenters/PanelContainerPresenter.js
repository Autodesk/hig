import React from "react";
import PropTypes from "prop-types";

import "./PanelContainerPresenter.scss";

export default function PanelContainerPresenter(props) {
  const { children, innerRef, maxHeight } = props;
  const maxHeightInPixels = maxHeight ? `${maxHeight}px` : undefined;

  return (
    <div
      className="hig__flyout-v1__panel-container"
      ref={innerRef}
      style={{ maxHeight: maxHeightInPixels }}
    >
      <div className="hig__flyout-v1__panel-container__inner">{children}</div>
    </div>
  );
}

PanelContainerPresenter.propTypes = {
  /** A required ref that's used to position the flyout */
  innerRef: PropTypes.func.isRequired,
  /** The panel content */
  children: PropTypes.node,
  /** Max height of the panel */
  maxHeight: PropTypes.number
};

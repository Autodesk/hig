import React from "react";
import PropTypes from "prop-types";

import "./PanelPresenter.scss";

export default function PanelPresenter(props) {
  const { children, innerRef, maxHeight, onScroll } = props;
  const maxHeightInPixels = maxHeight ? `${maxHeight}px` : undefined;

  return (
    <div
      className="hig__tooltip-v1__panel"
      onScroll={onScroll}
      ref={innerRef}
      style={{ maxHeight: maxHeightInPixels }}
    >
      <div className="hig__tooltip-v1__panel__inner">{children}</div>
    </div>
  );
}

PanelPresenter.propTypes = {
  /** A required ref that's used to position the flyout */
  innerRef: PropTypes.func,
  /** The panel content */
  children: PropTypes.node,
  /** Max height of the panel */
  maxHeight: PropTypes.number,
  /** Scroll event handler */
  onScroll: PropTypes.func
};

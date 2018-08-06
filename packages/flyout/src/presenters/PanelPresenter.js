import React from "react";
import PropTypes from "prop-types";

import "./PanelPresenter.scss";

export default function PanelPresenter({ children, onScroll }) {
  return (
    <div className="hig__flyout-v1__panel" onScroll={onScroll}>
      {children}
    </div>
  );
}

PanelPresenter.propTypes = {
  children: PropTypes.node,
  onScroll: PropTypes.func
};

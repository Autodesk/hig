import React from "react";
import PropTypes from "prop-types";

import "./ContentPresenter.scss";

export default function ContentPresenter({ children }) {
  return <div className="hig__tooltip-v1__content">{children}</div>;
}

ContentPresenter.propTypes = {
  /** Content */
  children: PropTypes.node
};

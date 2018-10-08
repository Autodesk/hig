import React from "react";
import PropTypes from "prop-types";

import "./ActionPresenter.scss";

export default function ActionPresenter({ children }) {
  return <div className="hig__top-nav__action">{children}</div>;
}

ActionPresenter.propTypes = {
  /** Content to render inside an action */
  children: PropTypes.node
};

import React from "react";
import PropTypes from "prop-types";

export default function Action({ children }) {
  return <div className="hig__top-nav__action">{children}</div>;
}

Action.propTypes = {
  /** Content to render inside an action */
  children: PropTypes.node
};

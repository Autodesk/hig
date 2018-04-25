import React from "react";
import PropTypes from "prop-types";

export default function Interactions({ children }) {
  return <div className="hig__top-nav__interactions">{children}</div>;
}

Interactions.propTypes = {
  /** Actions to be rendered */
  children: PropTypes.node
};

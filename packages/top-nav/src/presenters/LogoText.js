import React from "react";
import PropTypes from "prop-types";

export default function LogoText({ children }) {
  return <h1 className="hig__top-nav__logo-text">{children}</h1>;
}

LogoText.propTypes = {
  /** Logo content */
  children: PropTypes.node
};

import React from "react";
import PropTypes from "prop-types";

import "./LogoTextPresenter.scss";

export default function LogoTextPresenter({ children }) {
  return <h1 className="hig__top-nav__logo-text">{children}</h1>;
}

LogoTextPresenter.propTypes = {
  /** Logo content */
  children: PropTypes.node
};

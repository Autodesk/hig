import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./MenuPresenter.scss";

export default function MenuPresenter({ isOpen, children, ...otherProps }) {
  const classes = cx("hig__dropdown-v1__menu", {
    "hig__dropdown-v1__menu--open": isOpen
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

MenuPresenter.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node
};

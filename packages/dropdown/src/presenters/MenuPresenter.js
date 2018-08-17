import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./MenuPresenter.scss";

export default function MenuPresenter(props) {
  const { innerRef, isOpen, children, ...otherProps } = props;
  const classes = cx("hig__dropdown-v1__menu", {
    "hig__dropdown-v1__menu--open": isOpen
  });

  return (
    <div ref={innerRef} className={classes} {...otherProps}>
      {children}
    </div>
  );
}

MenuPresenter.propTypes = {
  innerRef: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  children: PropTypes.node
};

import React from "react";
import PropTypes from "prop-types";

import "./MenuPresenter.scss";

export default function MenuPresenter({ children, ...otherProps }) {
  return (
    <div className="hig__dropdown-v1__menu" {...otherProps}>
      {children}
    </div>
  );
}

MenuPresenter.propTypes = {
  children: PropTypes.node
};

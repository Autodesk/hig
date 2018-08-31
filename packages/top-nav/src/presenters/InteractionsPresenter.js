import React from "react";
import PropTypes from "prop-types";

import "./InteractionsPresenter.scss";

export default function InteractionsPresenter({ children, innerRef }) {
  return (
    <div className="hig__top-nav__interactions" ref={innerRef}>
      {children}
    </div>
  );
}

InteractionsPresenter.propTypes = {
  /** Actions to be rendered */
  children: PropTypes.node,
  /** Reference the wrappinf <div /> element */
  innerRef: PropTypes.func
};

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./WrapperPresenter.scss";

/**
 * @typedef {Object} WrapperProps
 * @property {JSX.Element} [input]
 * @property {JSX.Element} [menu]
 * @property {boolean} [disabled]
 * @property {boolean} [isOpen]
 */

/**
 * Downshift requires a reference to the component's root element.
 * As a result, this presenter should be purely functional so that it can
 * be used as function with Downshift.
 *
 * @param {WrapperProps} prop
 * @returns {JSX.Element}
 * @see https://github.com/paypal/downshift#getrootprops
 */
export default function WrapperPresenter(props) {
  const { children, disabled } = props;

  const containerClasses = cx("hig__dropdown", {
    "hig__dropdown--disabled": disabled
  });

  return <div className={containerClasses}>{children}</div>;
}

WrapperPresenter.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node
};

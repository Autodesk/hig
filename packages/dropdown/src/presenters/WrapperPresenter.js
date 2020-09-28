import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";

import stylesheet from "./WrapperPresenter.stylesheet";

/**
 * @typedef {Object} WrapperProps
 * @property {JSX.Element} [input]
 * @property {JSX.Element} [menu]
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
  const { disabled, children, ...otherProps } = props;
  const { className } = otherProps;

  return (
    <div
      {...otherProps}
      className={cx(css(stylesheet(props).dropdownWrapper), className)}
    >
      {children}
    </div>
  );
}

WrapperPresenter.propTypes = {
  children: PropTypes.node
};

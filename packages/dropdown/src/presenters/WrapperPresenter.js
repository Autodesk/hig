import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

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
  const { children } = props;

  return <div className={css(stylesheet(props))}>{children}</div>;
}

WrapperPresenter.propTypes = {
  children: PropTypes.node
};

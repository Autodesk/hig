import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import stylesheet from "./stylesheet";

/**
 * @typedef {Object} BannerInteractionsProps
 * @property {boolean} [isWrappingActions]
 * @property {any} [children]
 * @property {Function} [stylesheet]
 */

/**
 * @param {BannerInteractionsProps} props
 * @returns {JSX.Element}
 */
export default function BannerInteractions(props) {
  const { children, stylesheet: customStylesheet } = props;

  return <div className={css(stylesheet({stylesheet:customStylesheet}, {}))}>{children}</div>;
}

BannerInteractions.defaultProps = {
  isWrappingActions: false
};

BannerInteractions.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  isWrappingActions: PropTypes.bool,
  children: PropTypes.node,
  stylesheet: PropTypes.func
};

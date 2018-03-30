import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./banner-interactions.scss";

const classNames = {
  component: "hig__banner__interactions",
  wrapActions: "hig__banner__interactions--wrap-actions"
};

/**
 * @typedef {Object} BannerInteractionsProps
 * @property {boolean} [isWrappingActions]
 * @property {any} [children]
 */

/**
 * @param {BannerInteractionsProps} props
 * @returns {JSX.Element}
 */
export default function BannerInteractions(props) {
  const { isWrappingActions, children } = props;
  const classes = cx(
    classNames.component,
    isWrappingActions ? classNames.wrapActions : undefined
  );

  return <div className={classes}>{children}</div>;
}

BannerInteractions.defaultProps = {
  isWrappingActions: false
};

BannerInteractions.propTypes = {
  isWrappingActions: PropTypes.bool,
  children: PropTypes.node
};

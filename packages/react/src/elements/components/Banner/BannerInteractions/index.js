import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./styles.scss";

const classNames = {
  component: "hig__banner__interactions",
  wrapping: "hig__banner__interactions--wrapping"
};

/**
 * @typedef {Object} BannerInteractionsProps
 * @property {any} children
 */

/**
 * @param {BannerInteractionsProps} props
 * @returns {JSX.Element}
 */
export default function BannerInteractions(props) {
  const { className, isWrapping, children } = props;
  const classes = cx(
    className,
    classNames.component,
    isWrapping ? classNames.wrapping : undefined
  );

  return <div className={classes}>{children}</div>;
}

BannerInteractions.defaultProps = {
  isWrapping: false
};

BannerInteractions.propTypes = {
  className: PropTypes.string,
  isWrapping: PropTypes.bool,
  children: PropTypes.node
};

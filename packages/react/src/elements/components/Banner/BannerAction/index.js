import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

/**
 * @typedef {Object} BannerActionProps
 * @property {any} children
 */

/**
 * @param {BannerActionProps} props
 * @returns {JSX.Element}
 */
export default function BannerAction({ children }) {
  return <div className="hig__banner__action">{children}</div>;
}

BannerAction.propTypes = {
  children: PropTypes.node
};

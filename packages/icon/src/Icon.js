import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icons, { AVAILABLE_NAMES, names } from "@hig/icons";

import "./icon.scss";
import sizes from "./sizes";
import AVAILABLE_SIZES from './availableSizes';

const COMPONENT_CLASS = "hig__icon";

/**
 * @typedef {Object} IconProps
 * @property {string} [name]
 * @property {string} [svg]
 * @property {string} size
 * @property {string} [nameOrSVG]
 */

/**
 * @param {string} size
 * @returns {boolean}
 */
function isValidSize(size) {
  return AVAILABLE_SIZES.includes(size);
}

/**
 * @param {string} name
 * @param {string} size
 * @returns {string} SVG markup
 */
function getIconMarkupFromName(name, size) {
  const key = `${name}-${size}`;

  return Icons[key];
}

/**
 * @param {string} nameOrSVG
 * @param {string} size
 * @returns {string} SVG markup
 * @todo Disable logging in production
 */
function getIconMarkupFromOverload(nameOrSVG, size) {
  const isSVG = /^<svg/.test(nameOrSVG);

  return isSVG ? nameOrSVG : getIconMarkupFromName(nameOrSVG, size);
}

/**
 * @param {IconProps} props
 * @returns {string|undefined} SVG markup, or `undefined` when no icon is available
 * @todo Disable logging in production
 */
function getIconMarkup({ name, svg, nameOrSVG, size }) {
  if (svg) return svg;
  if (!isValidSize(size)) return undefined;
  if (name) return getIconMarkupFromName(name, size);
  if (nameOrSVG) return getIconMarkupFromOverload(nameOrSVG, size);

  return undefined;
}

/**
 * @returns {JSX.Element}
 */
function IconPlaceholder() {
  return <div className={COMPONENT_CLASS} />;
}

/**
 * @param {IconProps} props
 * @returns {JSX.Element}
 * @todo Disable logging in production
 */
export default function Icon(props) {
  const iconMarkup = getIconMarkup(props);

  if (!iconMarkup) {
    // eslint-disable-next-line no-console
    console.warn("NO HIG ICON:", props);
    return <IconPlaceholder />;
  }

  const { size } = props;
  const iconSizeClass = `hig__icon--${size}-size`;
  const classes = cx(COMPONENT_CLASS, iconSizeClass);

  return (
    // eslint-disable-next-line react/no-danger
    <div className={classes} dangerouslySetInnerHTML={{ __html: iconMarkup }} />
  );
}

export { AVAILABLE_NAMES, names, sizes };

Icon.defaultProps = {
  size: sizes.PX_24
};

Icon.propTypes = {
  /**
   * Name of the icon to be used
   */
  // eslint-disable-next-line react/no-unused-prop-types
  name: PropTypes.oneOf(AVAILABLE_NAMES),
  /**
   * SVG markup used for the icon
   */
  // eslint-disable-next-line react/no-unused-prop-types
  svg: PropTypes.string,
  /**
   * Deprecated; use `name` or `svg` instead
   */
  // eslint-disable-next-line react/no-unused-prop-types
  nameOrSVG: PropTypes.string,
  /**
   * The size of the icon
   */
  size: PropTypes.oneOf(AVAILABLE_SIZES).isRequired
};

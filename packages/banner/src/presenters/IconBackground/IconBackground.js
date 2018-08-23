import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";
import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";

import "./icon-background.scss";
import classNames from "../classNames";
import { types } from "../../types";

/** @type {Object.<string, string>} */
const iconNamesByType = {
  [types.PRIMARY]: iconNames.INFO,
  [types.COMPLETE]: iconNames.COMPLETE,
  [types.WARNING]: iconNames.ISSUE,
  [types.URGENT]: iconNames.ERROR
};

/**
 * @typedef {Object} IconProps
 * @property {string} type
 */

/**
 * @param {IconProps} props
 * @returns {JSX.Element}
 */
export function IconBackground({ type }) {
  return (
    <ThemeContext.Consumer>
      {({ themeClass }) => (
        <figure className={cx(classNames.iconBackground, themeClass)}>
          <Icon name={iconNamesByType[type]} size={iconSizes.MEDIUM} />
        </figure>
      )}
    </ThemeContext.Consumer>
  );
}

IconBackground.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconNamesByType))
};

export default IconBackground;

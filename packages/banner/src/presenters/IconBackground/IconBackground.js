import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import { Info24, Complete24, Issue24, Error24 } from "@hig/icons";
import stylesheet from "./stylesheet";
import { types } from "../../types";

/** @type {Object.<string, string>} */
const iconNamesByType = {
  [types.PRIMARY]: Info24,
  [types.COMPLETE]: Complete24,
  [types.WARNING]: Issue24,
  [types.URGENT]: Error24
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
  const Icon = iconNamesByType[type];
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <figure className={css(stylesheet({ type }, resolvedRoles))}>
          <Icon />
        </figure>
      )}
    </ThemeContext.Consumer>
  );
}

IconBackground.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconNamesByType))
};

export default IconBackground;

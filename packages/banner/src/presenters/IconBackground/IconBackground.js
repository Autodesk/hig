import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import {
  Complete16,
  Complete24,
  Error16,
  Error24,
  Info16,
  Info24,
  Alert16,
  Alert24
} from "@hig/icons";
import stylesheet from "./stylesheet";
import { types } from "../../types";

/** @type {Object.<string, string>} */
const iconNamesByType = {
  [types.PRIMARY]: {
    high: Info16,
    medium: Info24
  },
  [types.COMPLETE]: {
    high: Complete16,
    medium: Complete24
  },
  [types.WARNING]: {
    high: Alert16,
    medium: Alert24
  },
  [types.URGENT]: {
    high: Error16,
    medium: Error24
  }
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
      {({ resolvedRoles, metadata }) => {
        const density =
          metadata.densityId === "medium-density" ? "medium" : "high";
        const Icon = iconNamesByType[type][density];
        return (
          <figure className={css(stylesheet({ type }, resolvedRoles))}>
            <Icon />
          </figure>
        );
      }}
    </ThemeContext.Consumer>
  );
}

IconBackground.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconNamesByType))
};

export default IconBackground;

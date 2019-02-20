import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

/**
 * @typedef {Object} BannerActionProps
 * @property {any} children
 */

/**
 * @param {BannerActionProps} props
 * @returns {JSX.Element}
 */
export default function BannerAction({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div className={css(stylesheet({}, resolvedRoles))}>{children}</div>
      )}
    </ThemeContext.Consumer>
  );
}

BannerAction.propTypes = {
  children: PropTypes.node
};

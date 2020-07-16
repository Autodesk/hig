import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

/**
 * @typedef {Object} BannerActionProps
 * @property {any} children
 * @property {Function} stylesheet
 */

/**
 * @param {BannerActionProps} props
 * @returns {JSX.Element}
 */
export default function BannerAction({
  children,
  stylesheet: customStylesheet
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={css(
            stylesheet({ stylesheet: customStylesheet }, resolvedRoles)
          )}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

BannerAction.propTypes = {
  children: PropTypes.node,
  stylesheet: PropTypes.func
};

import React from "react";
import PropTypes from "prop-types";
import Typography from "@hig/typography";
import ThemeContext from "@hig/theme-context";
import "@hig/fonts/build/ArtifaktElement.css";
import { css } from "emotion";
import stylesheet from "./TabPresenter.stylesheet";

/**
 * @typedef {Object} TabPresenterProps
 * @property {boolean} [active]
 * @property {string} label
 * @property {Function} [onClick]
 * @property {Function} [onKeyDown]
 */

/**
 * @param {TabPresenterProps} props
 * @returns {JSX.Element}
 */
export default function TabPresenter({
  active,
  hasFocus,
  hasHover,
  label,
  onBlur,
  onFocus,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { active, hasFocus, hasHover, label },
          resolvedRoles
        );

        return (
          <li className={css(styles.tab)}>
            <div
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={onClick}
              onKeyDown={onKeyDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              role="button"
              tabIndex="0"
              className={css(styles.tabLabel)}
            >
              <Typography style={styles.tabLabelText}>{label}</Typography>
            </div>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TabPresenter.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

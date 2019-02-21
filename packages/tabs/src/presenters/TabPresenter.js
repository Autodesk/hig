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
export default function TabPresenter({ active, label, onClick, onKeyDown }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet({ active }, resolvedRoles);

        return (
          <li className={css(styles.tab)}>
            <span
              className={css(styles.tabLabel)}
              onClick={onClick}
              onKeyDown={onKeyDown}
              role="button"
              tabIndex="0"
            >
              <Typography fontWeight="bold" style={styles.tabLabelText}>
                {label}
              </Typography>
            </span>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TabPresenter.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func
};

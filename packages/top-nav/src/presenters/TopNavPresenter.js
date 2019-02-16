import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function TopNav({ leftActions, rightActions, logo }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(resolvedRoles);
        return (
          <div className={css(styles.topNav)}>
            {leftActions}
            <div className={css(styles.topNavLogoWrapper)}>{logo}</div>
            <div
              role="presentation"
              aria-hidden
              className={css(styles.topNavSpacer)}
            />
            {rightActions}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TopNav.propTypes = {
  /** Actions to render to the left of the logo */
  leftActions: PropTypes.node,
  /** Actions to render on the right of the bar */
  rightActions: PropTypes.node,
  /** Content to render as the logo */
  logo: PropTypes.node
};

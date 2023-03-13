import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function TopNav({
  leftActions,
  rightActions,
  logo,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const { className } = otherProps;
        const styles = stylesheet(
          { stylesheet: customStylesheet },
          resolvedRoles
        );
        const topNavLogoWrapperClassName = createCustomClassNames(
          className,
          "top-nav-logo-wrapper"
        );
        const topNavSpacerClassName = createCustomClassNames(
          className,
          "top-nav-spacer"
        );
        return (
          <div className={cx([className, css(styles.topNav)])}>
            {leftActions}
            <div
              className={cx([
                topNavLogoWrapperClassName,
                css(styles.topNavLogoWrapper),
              ])}
            >
              {logo}
            </div>
            <div
              role="presentation"
              aria-hidden
              className={cx([topNavSpacerClassName, css(styles.topNavSpacer)])}
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
  logo: PropTypes.node,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

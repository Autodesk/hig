import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function PanelPresenter({ children, onScroll, ...otherProps }) {
  const { className } = otherProps;
  const panelClassName = createCustomClassNames(className, "panel");

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { transitionStatus: null, anchorPoint: null },
          resolvedRoles
        );

        return (
          <div
            className={cx(css(styles.panel), panelClassName)}
            onScroll={onScroll}
          >
            {children}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

PanelPresenter.propTypes = {
  children: PropTypes.node,
  onScroll: PropTypes.func
};

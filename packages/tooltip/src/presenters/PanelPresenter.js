import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function PanelPresenter(props) {
  const {
    children,
    innerRef,
    maxHeight,
    onScroll,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(props, resolvedRoles);
        const panelClassName = createCustomClassNames(
          className,
          "tooltip-panel"
        );
        const panelInnerClassName = createCustomClassNames(
          className,
          "tooltip-panel-inner"
        );

        return (
          <div
            className={cx([panelClassName, css(styles.panel)])}
            onScroll={onScroll}
            ref={innerRef}
          >
            <div className={cx([panelInnerClassName, css(styles.panelInner)])}>
              {children}
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

PanelPresenter.propTypes = {
  /** A required ref that's used to position the flyout */
  innerRef: PropTypes.func,
  /** The panel content */
  children: PropTypes.node,
  /** Max height of the panel */
  maxHeight: PropTypes.number,
  /** Scroll event handler */
  onScroll: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

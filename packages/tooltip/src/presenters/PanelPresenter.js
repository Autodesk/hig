import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function PanelPresenter(props) {
  const { children, innerRef, maxHeight, onScroll } = props;
  const maxHeightInPixels = maxHeight ? `${maxHeight}px` : undefined;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(resolvedRoles);

        return (
          <div
            className={css(styles.panel)}
            onScroll={onScroll}
            ref={innerRef}
            style={{ maxHeight: maxHeightInPixels }}
          >
            <div className={css(styles.panelInner)}>{children}</div>
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
  onScroll: PropTypes.func
};

import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function PanelContainerPresenter(props) {
  const { children, innerRef, maxHeight } = props;
  const maxHeightInPixels = maxHeight ? `${maxHeight}px` : undefined;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            transitionStatus: null,
            anchorPoint: null
          },
          resolvedRoles
        );

        return (
          <div
            className={css(styles.panelContainer)}
            ref={innerRef}
            style={{ maxHeight: maxHeightInPixels }}
          >
            <div className={css(styles.panelContainerInner)}>{children}</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

PanelContainerPresenter.propTypes = {
  /** A required ref that's used to position the flyout */
  innerRef: PropTypes.func.isRequired,
  /** The panel content */
  children: PropTypes.node,
  /** Max height of the panel */
  maxHeight: PropTypes.number
};

import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function PanelContainerPresenter(props) {
  const { children, innerRef, maxHeight, ...otherProps } = props;
  const maxHeightInPixels = maxHeight ? `${maxHeight}px` : undefined;
  const { className } = otherProps;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const themeId = metadata.colorSchemeId;
        const styles = stylesheet(
          {
            transitionStatus: null,
            anchorPoint: null
          },
          resolvedRoles,
          themeId
        );

        return (
          <div
            className={cx(css(styles.panelContainer), className)}
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

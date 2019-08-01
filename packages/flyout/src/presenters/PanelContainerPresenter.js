import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import createCustomClassNames from "./createCustomClassNames";
import stylesheet from "./stylesheet";

export default function PanelContainerPresenter(props) {
  const { children, innerRef, maxHeight, ...otherProps } = props;
  const { className } = otherProps;
  const maxHeightInPixels = maxHeight ? `${maxHeight}px` : undefined;
  const panelContainerClassName = createCustomClassNames(
    className,
    "panel-container"
  );
  const panelContainerInnerClassName = createCustomClassNames(
    className,
    "panel-container-inner"
  );

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
            className={cx(css(styles.panelContainer), panelContainerClassName)}
            ref={innerRef}
            style={{ maxHeight: maxHeightInPixels }}
          >
            <div
              className={cx(
                css(styles.panelContainerInner),
                panelContainerInnerClassName
              )}
            >
              {children}
            </div>
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

import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import RichText from "@hig/rich-text";
import ThemeContext from "@hig/theme-context";

import DismissButtonPresenter from "./DismissButtonPresenter";
import stylesheet from "./stylesheet";

export default function NotificationPresenter(props) {
  const {
    children,
    dismissButtonTitle,
    hasHover,
    height,
    image,
    innerRef,
    onDismissButtonClick,
    onMouseEnter,
    onMouseLeave,
    showDismissButton,
    timestamp
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(resolvedRoles, props, metadata.colorSchemeId);
        return (
          <div
            className={css(styles.notification)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={innerRef}
            role="listitem"
            style={{ height }}
          >
            <div className={css(styles.notificationContent)}>
              {image ? (
                <div className={css(styles.notificationContentImage)}>
                  {image}
                </div>
              ) : null}
              <div className={css(styles.notificationContentText)}>
                <RichText size="small">{children}</RichText>
                {timestamp}
                {showDismissButton ? (
                  <DismissButtonPresenter
                    hasHover={hasHover}
                    onClick={onDismissButtonClick}
                    title={dismissButtonTitle}
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

NotificationPresenter.propTypes = {
  children: PropTypes.node,
  dismissButtonTitle: PropTypes.string,
  hasHover: PropTypes.bool,
  height: PropTypes.string,
  image: PropTypes.node,
  innerRef: PropTypes.func,
  onDismissButtonClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  showDismissButton: PropTypes.bool,
  timestamp: PropTypes.node
};

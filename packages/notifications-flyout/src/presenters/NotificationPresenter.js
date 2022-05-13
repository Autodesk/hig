import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import RichText from "@hig/rich-text";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

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
    onNotificationClick,
    onMouseEnter,
    onMouseLeave,
    showDismissButton,
    stylesheet: customStylesheet,
    timestamp,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const notificationContentClassName = createCustomClassNames(
    className,
    "notification-content"
  );
  const notificationContentImageClassName = createCustomClassNames(
    className,
    "notification-content-image"
  );
  const notificationContentTextClassName = createCustomClassNames(
    className,
    "notification-content-text"
  );

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(props, resolvedRoles);
        return (
          <div
            className={cx([className, css(styles.notification)])}
            onClick={onNotificationClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={innerRef}
            role="listitem"
            style={{ height }}
          >
            <div
              className={cx([
                notificationContentClassName,
                css(styles.notificationContent),
              ])}
            >
              {image ? (
                <div
                  className={cx([
                    notificationContentImageClassName,
                    css(styles.notificationContentImage),
                  ])}
                >
                  {image}
                </div>
              ) : null}
              <div
                className={cx([
                  notificationContentTextClassName,
                  css(styles.notificationContentText),
                ])}
              >
                <RichText size="small">{children}</RichText>
                {timestamp}
                {showDismissButton ? (
                  <DismissButtonPresenter
                    className={className}
                    hasHover={hasHover}
                    onClick={onDismissButtonClick}
                    stylesheet={customStylesheet}
                    title={dismissButtonTitle}
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
    /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
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
  onNotificationClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  showDismissButton: PropTypes.bool,
  stylesheet: PropTypes.func,
  timestamp: PropTypes.node,
};

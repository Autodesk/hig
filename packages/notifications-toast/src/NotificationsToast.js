import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import IconButton from "@hig/icon-button";
import { CloseSUI, CloseXsUI } from "@hig/icons";
import RichText from "@hig/rich-text";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import { createCustomClassNames } from "@hig/utils";

import { STATUS_ICONS, AVAILABLE_STATUSES } from "./statuses";

import stylesheet from "./NotificationsToast.stylesheet";

export default class NotificationsToast extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    /**
     * Message content for the Toast. It's recommended to keep the content to no more than 20 words.
     */
    children: PropTypes.node,
    /**
     * An Avatar or Thumbnail to precede the notification content.
     * If an image is provided and showStatusIcon is true, the image will take priority.
     */
    image: PropTypes.node,
    /**
     * Function to call when Toast is dismissed
     */
    onDismiss: PropTypes.func,
    /**
     * The tooltip text shown for the close icon
     */
    onDismissTitle: PropTypes.string,
    /**
     * Indicate whether to show the icon associated with the provided status.
     * An icon will not be shown for a null status.
     */
    showStatusIcon: PropTypes.bool,
    /**
     * Indicates the style of toast notification
     */
    status: PropTypes.oneOf(AVAILABLE_STATUSES),
    /**
     * Function to modify the component's styles
     */
    stylesheet: PropTypes.func,
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    onDismissTitle: "Dismiss",
    showStatusIcon: true,
    status: "primary",
  };

  _renderImage = (themeData, metadata) => {
    const { showStatusIcon, image, status, ...otherProps } = this.props;
    const { className } = otherProps;
    const styles = stylesheet(this.props, themeData);
    const iconFill =
      status === "primary"
        ? themeData["basics.colors.primary.autodeskBlue.500"]
        : themeData[`colorScheme.status.${status}`];
    const toastImageContainerClassName = createCustomClassNames(
      className,
      "toast-image-container"
    );
    if (image) {
      return (
        <div
          className={cx([
            css(styles.toastImageContainer),
            toastImageContainerClassName,
          ])}
        >
          {image}
        </div>
      );
    }

    const density = metadata.densityId === "medium-density" ? "medium" : "high";
    if (showStatusIcon && STATUS_ICONS[status]) {
      const Icon = STATUS_ICONS[status][density];
      return (
        <div
          className={cx([
            css(styles.toastImageContainer),
            toastImageContainerClassName,
          ])}
        >
          <Icon color={iconFill} />
        </div>
      );
    }

    return null;
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const {
            onDismissTitle,
            status,
            stylesheet: customStylesheet,
            ...otherProps
          } = this.props;
          const { className } = otherProps;
          const styles = stylesheet(
            { status, stylesheet: customStylesheet },
            resolvedRoles
          );
          const toastBodyClassName = createCustomClassNames(
            className,
            "toast-body"
          );
          const toastMessageClassName = createCustomClassNames(
            className,
            "toast-message"
          );
          const toastDismissClassName = createCustomClassNames(
            className,
            "toast-dismiss"
          );
          const toastTypographyClassName = createCustomClassNames(
            className,
            "toast-typography"
          );
          const toastIconButtonClassName = createCustomClassNames(
            className,
            "toast-icon-button"
          );
          const CloseIcon =
            metadata.densityId === "medium-density" ? CloseSUI : CloseXsUI;

          return (
            <div className={cx([css(styles.toast), className])}>
              {this._renderImage(resolvedRoles, metadata)}
              <div className={cx([css(styles.toastBody), toastBodyClassName])}>
                <div
                  className={cx([
                    css(styles.toastMessage),
                    toastMessageClassName,
                  ])}
                >
                  <RichText>
                    <Typography
                      style={{
                        fontSize: "12px",
                        maxWidth: "220px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                      className={toastTypographyClassName}
                    >
                      {this.props.children}
                    </Typography>
                  </RichText>
                  <div
                    className={cx([
                      css(styles.toastDismiss),
                      toastDismissClassName,
                    ])}
                  >
                    <IconButton
                      title={onDismissTitle}
                      icon={<CloseIcon />}
                      type="transparent"
                      onClick={this.props.onDismiss}
                      className={toastIconButtonClassName}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

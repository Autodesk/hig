import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import IconButton from "@hig/icon-button";
import { CloseSUI } from "@hig/icons";
import RichText from "@hig/rich-text";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";

import { STATUS_ICONS, AVAILABLE_STATUSES } from "./statuses";

import stylesheet from "./NotificationsToast.stylesheet";

export default class NotificationsToast extends Component {
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
     * Indicate whether to show the icon associated with the provided status.
     * An icon will not be shown for a null status.
     */
    showStatusIcon: PropTypes.bool,
    /**
     * Indicates the style of toast notification
     */
    status: PropTypes.oneOf(AVAILABLE_STATUSES)
  };

  static defaultProps = {
    showStatusIcon: true,
    status: "primary"
  };

  _renderImage = themeData => {
    const { showStatusIcon, image, status } = this.props;
    const styles = stylesheet(themeData, status);
    const iconFill =
      status === "primary"
        ? themeData["basics.colors.autodeskBlue500"]
        : themeData[`colorScheme.${status}Color`];
    if (image) {
      return <div className={css(styles.toastImageContainer)}>{image}</div>;
    }

    if (showStatusIcon && STATUS_ICONS[status]) {
      const Icon = STATUS_ICONS[status];
      return (
        <div className={css(styles.toastImageContainer)}>
          <Icon color={iconFill} />
        </div>
      );
    }

    return null;
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const { status } = this.props;
          const styles = stylesheet(resolvedRoles, status);

          return (
            <div className={css(styles.toast)}>
              {this._renderImage(resolvedRoles)}
              <div className={css(styles.toastBody)}>
                <div className={css(styles.toastMessage)}>
                  <RichText>
                    <Typography style={{
                        fontSize: "12px",
                        maxWidth: "220px",
                        textOverflow: "ellipsis", 
                        overflow: `hidden`
                      }}>
                      {this.props.children}
                    </Typography>
                  </RichText>
                  <div className={css(styles.toastDismiss)}>
                    <IconButton
                      title="Dismiss"
                      icon={<CloseSUI />}
                      type="transparent"
                      onClick={this.props.onDismiss}
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

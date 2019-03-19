import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@hig/icon-button";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import "@hig/fonts/build/ArtifaktElement.css";
import { CloseSUI, CloseMUI } from "@hig/icons";
import "@hig/icon-button/build/index.css";
import { css } from "emotion";

export default class ModalHeaderPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the header of the modal
     */
    children: PropTypes.node,
    /**
     * ARIA label attribute for the close button if/when children
     * are not utilized
     */
    closeButtonAriaLabel: PropTypes.string,
    /**
     * ID for a11y
     */
    id: PropTypes.string,
    /**
     * Triggers when one clicks the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Styles for the modal header
     */
    styles: PropTypes.objectOf(PropTypes.any),
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  static defaultProps = {
    closeButtonAriaLabel: "close"
  };

  renderChildren() {
    const { children, id, styles } = this.props;
    return (
      <header className={css(styles)} id={id}>
        {children}
      </header>
    );
  }

  render() {
    const {
      children,
      closeButtonAriaLabel,
      id,
      onCloseClick,
      title,
      styles
    } = this.props;

    return children ? (
      this.renderChildren()
    ) : (
      <ThemeContext.Consumer>
        {({ metadata }) => {
          const closeIcon =
            metadata.densityId === "medium-density" ? (
              <CloseMUI />
            ) : (
              <CloseSUI />
            );
          return (
            <header className={css(styles.header)} id={id}>
              <div className={css(styles.headerContent)}>
                <Typography
                  style={{
                    fontSize: styles.header.fontSize,
                    lineHeight: styles.header.lineHeight
                  }}
                >
                  {title}
                </Typography>
                <IconButton
                  aria-label={closeButtonAriaLabel}
                  icon={closeIcon}
                  onClick={onCloseClick}
                  title="Close"
                />
              </div>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

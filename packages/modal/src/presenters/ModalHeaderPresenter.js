import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@hig/icon-button";
import Typography from "@hig/typography";
import "@hig/fonts/build/ArtifaktElement.css";
import { Close16 } from "@hig/icons";
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
            icon={<Close16 />}
            onClick={onCloseClick}
            title="Close"
          />
        </div>
      </header>
    );
  }
}

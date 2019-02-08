import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@hig/icon-button";
import { XCloseGray24 } from "@hig/icons";
import "@hig/icon-button/build/index.css";
import { css } from "emotion";
import stylesheet from "./ModalHeaderPresenter.stylesheet";

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
     * Title of the modal
     */
    title: PropTypes.string,
    /**
     * Style of the modal shell
     */
    type: PropTypes.string
  };

  static defaultProps = {
    closeButtonAriaLabel: "close"
  };

  renderChildren(styles) {
    return (
      <header className={css(styles.modalHeader)} id={this.props.id}>
        {this.props.children}
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
      type
    } = this.props;

    const styles = stylesheet({ type });

    return children ? (
      this.renderChildren(styles)
    ) : (
      <header className={css(styles.modalHeader)} id={id}>
        <IconButton
          aria-label={closeButtonAriaLabel}
          icon={<XCloseGray24 />}
          onClick={onCloseClick}
          title="Close"
        />
        <span>{title}</span>
      </header>
    );
  }
}

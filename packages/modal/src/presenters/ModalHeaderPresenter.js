import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton, { names } from "@hig/icon-button";

import "./ModalHeaderPresenter.scss";

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
     * Triggers when one clicks the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  static defaultProps = {
    closeButtonAriaLabel: "close"
  };

  renderChildren() {
    return (
      <header className="hig__modal-V1__header">{this.props.children}</header>
    );
  }

  render() {
    const { children, closeButtonAriaLabel, onCloseClick, title } = this.props;

    return children ? (
      this.renderChildren()
    ) : (
      <header className="hig__modal-V1__header">
        <IconButton
          aria-label={closeButtonAriaLabel}
          name={names.X_CLOSE_GRAY}
          onClick={onCloseClick}
          title="Close"
        />
        <span className="hig__modal-V1__header-title">{title}</span>
      </header>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@hig/icon-button";
import { XCloseGray24 } from "@hig/icons";
import "@hig/icon-button/build/index.css";

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
    title: PropTypes.string
  };

  static defaultProps = {
    closeButtonAriaLabel: "close"
  };

  renderChildren() {
    return (
      <header className="hig__modal-V1__header" id={this.props.id}>
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
      title
    } = this.props;

    return children ? (
      this.renderChildren()
    ) : (
      <header className="hig__modal-V1__header" id={id}>
        <IconButton
          aria-label={closeButtonAriaLabel}
          icon={<XCloseGray24 />}
          onClick={onCloseClick}
          title="Close"
        />
        <span className="hig__modal-V1__header-title">{title}</span>
      </header>
    );
  }
}

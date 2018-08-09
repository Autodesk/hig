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
     * Triggers when one clicks the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  renderChildren() {
    return (
      <header className="hig__modal-V1__header">{this.props.children}</header>
    );
  }

  render() {
    return this.props.children ? (
      this.renderChildren()
    ) : (
      <header className="hig__modal-V1__header">
        <IconButton
          aria-label="close"
          name={names.X_CLOSE_GRAY}
          onClick={event => this.props.onCloseClick(event)}
          title="Close"
        />
        <span className="hig__modal-V1__header-title">{this.props.title}</span>
      </header>
    );
  }
}

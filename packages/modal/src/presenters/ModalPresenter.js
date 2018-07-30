import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ModalHeaderPresenter from "./ModalHeaderPresenter";
import "./ModalPresenter.scss";

export default class ModalPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the body of the modal
     */
    children: PropTypes.node,
    /**
     * Supports adding any dom content to the header of the modal
     */
    headerChildren: PropTypes.node,
    /**
     * Triggers when one clicks the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Triggers when one clicks the overlay behind the modal
     */
    onOverlayClick: PropTypes.func,
    /**
     * Triggers when one clicks the modal window
     */
    onWindowClick: PropTypes.func,
    /**
     * Modal is visible when true
     */
    open: PropTypes.bool,
    /**
     * Style of the modal shell
     */
    style: PropTypes.string,
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  setScrolling = element => {
    this.hasScrolling = element.scrollHeight > element.clientHeight;
  };

  render() {
    const style = this.props.style || "standard";

    const windowClasses = cx([
      "hig__modal-V1__window",
      `hig__modal-V1__window--${style}`
    ]);

    const wrapperClasses = cx([
      "hig__modal-V1",
      {
        "hig__modal-V1--open": this.props.open
      }
    ]);

    return (
      <div className={wrapperClasses}>
        <a
          className="hig__modal-V1__overlay"
          onClick={event => this.props.onOverlayClick(event)}
          role="button"
          tabIndex="0"
        >
          <a
            className={windowClasses}
            onClick={event => this.props.onWindowClick(event)}
            role="button"
            tabIndex="0"
          >
            <ModalHeaderPresenter
              onCloseClick={this.props.onCloseClick}
              title={this.props.title}
            >
              {this.props.headerChildren}
            </ModalHeaderPresenter>
            <div className="hig__modal-V1__body">
              <div className="hig__modal-V1__slot">{this.props.children}</div>
            </div>
          </a>
        </a>
      </div>
    );
  }
}

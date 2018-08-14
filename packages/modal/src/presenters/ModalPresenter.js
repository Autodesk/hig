import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ModalHeaderPresenter from "./ModalHeaderPresenter";
import { types } from "../types";
import "./ModalPresenter.scss";

export default class ModalPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the body of the modal
     */
    children: PropTypes.node,
    /**
     * ARIA label attribute for the close button if/when headerChildren
     * are not utilized
     */
    closeButtonAriaLabel: PropTypes.string,
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
     * Title of the modal
     */
    title: PropTypes.string,
    /**
     * Style of the modal shell
     */
    type: PropTypes.string
  };

  static defaultProps = {
    type: types.STANDARD
  };

  setScrolling = element => {
    this.hasScrolling = element.scrollHeight > element.clientHeight;
  };

  render() {
    const {
      children,
      closeButtonAriaLabel,
      headerChildren,
      onCloseClick,
      onOverlayClick,
      onWindowClick,
      open,
      title,
      type
    } = this.props;

    const windowClasses = cx([
      "hig__modal-V1__window",
      `hig__modal-V1__window--${type}`
    ]);

    const wrapperClasses = cx([
      "hig__modal-V1",
      {
        "hig__modal-V1--open": open
      }
    ]);

    return (
      <div className={wrapperClasses}>
        <a
          className="hig__modal-V1__overlay"
          onClick={onOverlayClick}
          role="button"
          tabIndex="0"
        >
          <a
            className={windowClasses}
            onClick={onWindowClick}
            role="button"
            tabIndex="0"
          >
            <ModalHeaderPresenter
              closeButtonAriaLabel={closeButtonAriaLabel}
              onCloseClick={onCloseClick}
              title={title}
            >
              {headerChildren}
            </ModalHeaderPresenter>
            <div className="hig__modal-V1__body">
              <div className="hig__modal-V1__slot">{children}</div>
            </div>
          </a>
        </a>
      </div>
    );
  }
}

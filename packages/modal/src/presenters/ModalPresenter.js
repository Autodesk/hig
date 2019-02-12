import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { generateId } from "@hig/utils";

import ModalHeaderPresenter from "./ModalHeaderPresenter";
import { types } from "../types";
import "./ModalPresenter.scss";

export default class ModalPresenter extends Component {
  static modifiersByType = {
    [types.STANDARD]: "hig__modal-V1__window--standard",
    [types.ALTERNATE]: "hig__modal-V1__window--alternate"
  };

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

  titleId = generateId("modal-title");

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

    const windowClasses = cx(
      "hig__modal-V1__window",
      ModalPresenter.modifiersByType[type]
    );

    const wrapperClasses = cx([
      "hig__modal-V1",
      {
        "hig__modal-V1--open": open
      }
    ]);

    /*
     * The "no-noninteractive-element-interactions" rule is disabled for this block.
     * This is due to the modal being is a special case where its containers are to be considered
     * as non-interactive, static content by screen-readers, but must also respond to `click` events.
     * Additionally, even though they respond to `click` events, they're not focusable.
     */
    /*
      eslint-disable
      jsx-a11y/no-noninteractive-element-interactions,
      jsx-a11y/click-events-have-key-events
    */
    return (
      <div className={wrapperClasses}>
        <div
          aria-labelledby={this.titleId}
          className="hig__modal-V1__overlay"
          onClick={onOverlayClick}
          role="dialog"
          tabIndex="-1"
        >
          <article
            className={windowClasses}
            onClick={onWindowClick}
            role="document"
          >
            <ModalHeaderPresenter
              id={this.titleId}
              closeButtonAriaLabel={closeButtonAriaLabel}
              onCloseClick={onCloseClick}
              title={title}
            >
              {headerChildren}
            </ModalHeaderPresenter>
            <section className="hig__modal-V1__body">
              <div className="hig__modal-V1__slot">{children}</div>
            </section>
          </article>
        </div>
      </div>
    );
    /*
      eslint-enable
      jsx-a11y/no-noninteractive-element-interactions,
      jsx-a11y/click-events-have-key-events
    */
  }
}

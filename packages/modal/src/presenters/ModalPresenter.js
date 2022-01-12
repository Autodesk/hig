import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { createCustomClassNames, generateId } from "@hig/utils";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./ModalPresenter.stylesheet";
import ModalHeaderPresenter from "./ModalHeaderPresenter";
import { types } from "../types";

export default class ModalPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the body of the modal
     */
    children: PropTypes.node,
    /**
     * ARIA label attribute for the close button if/when headerChildren
     * are not utilized, also used for the title attribute
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
     * Enables modification of Modal Styles
     */
    stylesheet: PropTypes.func,
    /**
     * Title of the modal
     */
    title: PropTypes.node,
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
      stylesheet: customizeStyles,
      title,
      type,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const modalOverlayClassName = createCustomClassNames(
      className,
      "modal-overlay"
    );
    const modalWindowClassName = createCustomClassNames(
      className,
      "modal-window"
    );
    const modalBodyClassName = createCustomClassNames(className, "modal-body");
    const modalBodyContentClassName = createCustomClassNames(
      className,
      "modal-body-content"
    );

    /*
     * The "no-noninteractive-element-interactions" rule is disabled for this block.
     * This is due to the modal being is a special case where its containers are to be considered
     * as non-interactive, static content by screen-readers, but must also respond to `click`
     * events. Additionally, even though they respond to `click` events, they're not focusable.
     */
    /*
      eslint-disable
      jsx-a11y/no-noninteractive-element-interactions,
      jsx-a11y/click-events-have-key-events
    */

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet({ open, type }, resolvedRoles);

          const cssStyles = customizeStyles
            ? customizeStyles(
                styles,
                this.props,
                resolvedRoles,
                metadata.colorSchemeId
              )
            : styles;

          return (
            <div className={cx(css(cssStyles.modal.wrapper), className)}>
              <div
                aria-labelledby={this.titleId}
                className={cx(
                  css(cssStyles.modal.overlay),
                  modalOverlayClassName
                )}
                onClick={onOverlayClick}
                role="dialog"
                tabIndex="-1"
              >
                <article
                  className={cx(
                    css(cssStyles.modal.window),
                    modalWindowClassName
                  )}
                  onClick={onWindowClick}
                  role="document"
                >
                  <ModalHeaderPresenter
                    className={className}
                    id={this.titleId}
                    closeButtonAriaLabel={closeButtonAriaLabel}
                    onCloseClick={onCloseClick}
                    styles={cssStyles.modal}
                    title={title}
                  >
                    {headerChildren}
                  </ModalHeaderPresenter>
                  <section
                    className={cx(
                      css(cssStyles.modal.body),
                      modalBodyClassName
                    )}
                  >
                    <div
                      className={cx(
                        css(cssStyles.modal.bodyContent),
                        modalBodyContentClassName
                      )}
                    >
                      {children}
                    </div>
                  </section>
                </article>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
    /*
      eslint-enable
      jsx-a11y/no-noninteractive-element-interactions,
      jsx-a11y/click-events-have-key-events
    */
  }
}

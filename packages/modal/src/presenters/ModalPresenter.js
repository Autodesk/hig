import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { generateId } from "@hig/utils";
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
     * Enables modification of Modal Styles
     */
    stylesheet: PropTypes.func,
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
      stylesheet: customizeStyles,
      title,
      type
    } = this.props;

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
            <div className={css(cssStyles.modal.wrapper)}>
              <div
                aria-labelledby={this.titleId}
                className={css(cssStyles.modal.overlay)}
                onClick={onOverlayClick}
                role="dialog"
                tabIndex="-1"
              >
                <article
                  className={css(cssStyles.modal.window)}
                  onClick={onWindowClick}
                  role="document"
                >
                  <ModalHeaderPresenter
                    id={this.titleId}
                    closeButtonAriaLabel={closeButtonAriaLabel}
                    onCloseClick={onCloseClick}
                    styles={styles.modal}
                    title={title}
                  >
                    {headerChildren}
                  </ModalHeaderPresenter>
                  <section className={css(cssStyles.modal.body)}>
                    <div className={css(cssStyles.modal.bodyContent)}>
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

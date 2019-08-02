import React, { Component } from "react";
import PropTypes from "prop-types";

import ModalPresenter from "./presenters/ModalPresenter";
import ModalBehavior from "./behaviors/ModalBehavior";

export default class Modal extends Component {
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
     * Triggers when you click the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Triggers when you click the overlay behind the modal
     */
    onOverlayClick: PropTypes.func,
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

  render() {
    const {
      children,
      closeButtonAriaLabel,
      headerChildren,
      onCloseClick,
      onOverlayClick,
      open,
      stylesheet,
      title,
      type,
      ...otherProps
    } = this.props;
    const { className } = otherProps;

    return (
      <ModalBehavior
        onCloseClick={onCloseClick}
        onOverlayClick={onOverlayClick}
        open={open}
      >
        {({ handleCloseClick, handleOverlayClick, handleWindowClick }) => (
          <ModalPresenter
            className={className}
            closeButtonAriaLabel={closeButtonAriaLabel}
            headerChildren={headerChildren}
            onCloseClick={handleCloseClick}
            onOverlayClick={handleOverlayClick}
            onWindowClick={handleWindowClick}
            open={open}
            stylesheet={stylesheet}
            title={title}
            type={type}
          >
            {children}
          </ModalPresenter>
        )}
      </ModalBehavior>
    );
  }
}

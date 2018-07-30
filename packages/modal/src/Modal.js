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
     * Style of the modal shell
     */
    style: PropTypes.string,
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  render() {
    const {
      children,
      headerChildren,
      onCloseClick,
      onOverlayClick,
      open,
      style,
      title
    } = this.props;

    return (
      <ModalBehavior
        onCloseClick={onCloseClick}
        onOverlayClick={onOverlayClick}
        open={open}
      >
        {({ handleCloseClick, handleOverlayClick, handleWindowClick }) => (
          <ModalPresenter
            headerChildren={headerChildren}
            onCloseClick={handleCloseClick}
            onOverlayClick={handleOverlayClick}
            onWindowClick={handleWindowClick}
            open={open}
            style={style}
            title={title}
          >
            {children}
          </ModalPresenter>
        )}
      </ModalBehavior>
    );
  }
}

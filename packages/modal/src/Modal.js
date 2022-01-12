import React from "react";
import PropTypes from "prop-types";

import ModalPresenter from "./presenters/ModalPresenter";
import ModalBehavior from "./behaviors/ModalBehavior";

const Modal = props => {
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
  } = props;
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
};

Modal.displayName = "Modal";

Modal.propTypes = {
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
  title: PropTypes.node,
  /**
   * Style of the modal shell
   */
  type: PropTypes.string
};

Modal.defaultProps = {
  closeButtonAriaLabel: "Close"
};

export default Modal;

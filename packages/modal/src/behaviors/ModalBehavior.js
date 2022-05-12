import PropTypes from "prop-types";

const ModalBehavior = (props) => {
  /**
   * @param {MouseEvent} event
   */
  const handleCloseClick = (event) => {
    const { onCloseClick } = props;

    if (onCloseClick) {
      onCloseClick(event);
    }
  };

  /**
   * @param {MouseEvent} event
   */
  const handleOverlayClick = (event) => {
    const { onOverlayClick } = props;

    if (onOverlayClick) {
      onOverlayClick(event);
    }
  };

  /**
   * @param {MouseEvent} event
   */
  const handleWindowClick = (event) => {
    event.stopPropagation();
  };

  return props.children({
    handleCloseClick,
    handleOverlayClick,
    handleWindowClick,
  });
};

ModalBehavior.displayName = "ModalBehavior";

ModalBehavior.propTypes = {
  /**
   * Triggers when you click the close button
   */
  onCloseClick: PropTypes.func,
  /**
   * Triggers when you click the overlay behind the modal
   */
  onOverlayClick: PropTypes.func,
  /**
   * A function to render content of the modal
   */
  children: PropTypes.func,
};

export default ModalBehavior;

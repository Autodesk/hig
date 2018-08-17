import { Component } from "react";
import PropTypes from "prop-types";

export default class ModalBehavior extends Component {
  static propTypes = {
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
    children: PropTypes.func
  };

  /**
   * @param {MouseEvent} event
   */
  handleCloseClick = event => {
    const { onCloseClick } = this.props;

    if (onCloseClick) {
      onCloseClick(event);
    }
  };

  /**
   * @param {MouseEvent} event
   */
  handleOverlayClick = event => {
    const { onOverlayClick } = this.props;

    if (onOverlayClick) {
      onOverlayClick(event);
    }
  };

  /**
   * @param {MouseEvent} event
   */
  handleWindowClick = event => {
    event.stopPropagation();
  };

  render() {
    return this.props.children({
      handleCloseClick: this.handleCloseClick,
      handleOverlayClick: this.handleOverlayClick,
      handleWindowClick: this.handleWindowClick
    });
  }
}

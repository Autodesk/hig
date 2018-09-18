import { Component } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} TextInputBehaviorPayload
 * @property {string} value
 * @property {function(UIEvent): void} handleChange
 * @property {function(): void} clear
 */

/**
 * @typedef {Object} State
 * @property {string} value
 */

export default class TextInputBehavior extends Component {
  static propTypes = {
    /**
     * Render prop
     */
    children: PropTypes.func,
    /**
     * Initial value of the field
     */
    defaultValue: PropTypes.string,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when the value is cleared
     */
    onClear: PropTypes.func,
    /**
     * Initial value of the field
     */
    value: PropTypes.string
  };

  /**
   * @type {State}
   */
  state = {
    value: this.props.defaultValue || ""
  };

  /**
   * @returns {string}
   */
  getValue() {
    if (this.isControlled()) {
      return this.props.value;
    }

    return this.state.value;
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    const { onChange } = this.props;

    if (onChange) onChange(value);

    if (!this.isControlled()) {
      this.setState({ value });
    }
  }

  isControlled() {
    return this.props.value !== undefined;
  }

  /**
   * @param {event} Event
   */
  handleChange = event => {
    this.setValue(event.target.value);
  };

  /**
   * An action that empties the value
   */
  clear = () => {
    const { onClear } = this.props;

    if (onClear) {
      onClear();
    }

    if (!this.isControlled()) {
      this.setValue("");
    }
  };

  render() {
    return this.props.children({
      value: this.getValue(),
      handleChange: this.handleChange,
      clear: this.clear
    });
  }
}

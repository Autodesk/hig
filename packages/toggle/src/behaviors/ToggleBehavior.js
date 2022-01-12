import { Component } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} State
 * @property {boolean} on
 */

export default class ToggleBehavior extends Component {
  static propTypes = {
    /**
     * Turns on the toggle
     */
    on: PropTypes.bool,
    /**
     * Initially checks the checkbox, but allows user action to change it
     */
    defaultOn: PropTypes.bool,
    /**
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user releases a keyboard key
     */
    onKeyUp: PropTypes.func,
    /**
     * Render prop
     */
    children: PropTypes.func
  };

  static defaultProps = {
    defaultOn: false
  };

  /**
   * @type {State}
   */
  state = {
    on: this.props.defaultOn
  };

  /**
   * @returns {boolean}
   */
  getChecked() {
    if (this.isControlled()) {
      return this.props.on;
    }

    return this.state.on;
  }

  /**
   * @param {boolean} on
   */
  setChecked(on) {
    const { onChange, onKeyUp } = this.props;

    if (onChange) onChange(on);
    if (onKeyUp) onKeyUp(on);

    if (!this.isControlled()) {
      this.setState({ on });
    }
  }

  isControlled() {
    return this.props.on !== undefined;
  }

  /**
   * @param {UIEvent} event
   */
  handleChange = event => {
    this.setChecked(event.target.checked);
  };

  handleKeyUp = event => {
    if (event.keyCode === 13) {
      this.setChecked(!event.target.checked);
    }
  };

  render() {
    const { handleChange, handleKeyUp } = this;
    const on = this.getChecked();

    return this.props.children({
      on,
      handleChange,
      handleKeyUp
    });
  }
}

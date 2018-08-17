import { Component } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} TextInputBehaviorPayload
 * @property {string} value
 * @property {function(UIEvent): void} handleChange
 * @property {function(): void} clear
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

  state = {
    value: this.props.defaultValue || ""
  };

  getValue() {
    if (this.isControlled()) {
      return this.props.value;
    }

    return this.state.value;
  }

  setValue(value) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }

    this.setState({ value });
  }

  handleChange = event => {
    this.setValue(this.isControlled() ? this.props.value : event.target.value);
  };

  clear = () => {
    const { onClear } = this.props;

    if (onClear) {
      onClear();
    }

    this.setValue("");
  };

  isControlled() {
    return this.props.value !== undefined;
  }

  render() {
    return this.props.children({
      value: this.getValue(),
      handleChange: this.handleChange,
      clear: this.clear
    });
  }
}

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
     * An object or array of objects to choose from
     */
    value: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ])
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
    this.setState({ value });
  }

  handleChange = event => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event);
    }

    this.setValue(this.isControlled() ? this.props.value : event.target.value);
  };

  isControlled() {
    return this.props.value !== undefined;
  }

  render() {
    return this.props.children({
      value: this.getValue(),
      handleChange: this.handleChange
    });
  }
}

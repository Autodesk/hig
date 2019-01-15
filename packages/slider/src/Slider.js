import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import Input from "./presenters/Input";
import stylesheet from "./Slider.stylesheet";

/**
 * @typedef {string|number} Value
 */

/**
 * @typedef {Object} State
 * @property {Value} value
 */

export default class Slider extends Component {
  static propTypes = {
    /**
     * Initial value of the field. User action will override
     */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * HTML ID attribute
     */
    id: PropTypes.string,
    /**
     * Minimum value of the slider
     */
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Maximum value of the slider
     */
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Name of the field when submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus onto the field
     */
    onFocus: PropTypes.func,
    /**
     * Called as user changes the value of the field
     */
    onInput: PropTypes.func,
    /**
     * The granularity of each step on the slider
     */
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Value of the field
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    defaultValue: "",
    min: "0",
    max: "100",
    step: "1"
  };

  /**
   * @type {State}
   */
  state = {
    value: this.props.defaultValue
  };

  /**
   * @returns {Value}
   */
  getValue() {
    if (this.isControlled()) {
      return this.props.value;
    }

    return this.state.value;
  }

  /**
   * @param {Value} value
   */
  setValue(value) {
    const { onChange } = this.props;

    if (onChange) onChange(Number(value));

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

  render() {
    const {
      defaultValue, // exclude from otherProps
      onChange, // exclude from otherProps
      ...otherProps
    } = this.props;

    const value = this.getValue();
    const styles = stylesheet();

    return (
      <div className={css(styles.slider)}>
        <Input onChange={this.handleChange} value={value} {...otherProps} />
      </div>
    );
  }
}

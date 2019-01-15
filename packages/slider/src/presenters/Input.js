import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import stylesheet from "./Input.stylesheet";

export default class Input extends Component {
  static propTypes = {
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

  render() {
    const { min, max, value } = this.props;
    const styles = stylesheet();

    return (
      <input
        className={css(styles.input)}
        type="range"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        {...this.props}
      />
    );
  }
}

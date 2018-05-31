import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./slider.scss";

export default class Slider extends Component {
  static propTypes = {
    /**
     * Initial value of the field. User action will override
     */
    defaultValue: PropTypes.string,
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Instructional text for the field
     */
    instructions: PropTypes.string,
    /**
     * Text describing what the field represents
     */
    label: PropTypes.string,
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
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * Value of the field
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const { value, id, step, label, instructions, min, max } = this.props;

    return (
      <div
        className={cx("hig__range", {
          "hig__range--disabled": disabled
        })}
      >
        <div
          className="hig__range__field__range-values"
          data-range-min={min}
          data-range-max={max}
        >
          <span className="hig__range__field__current-value">{value}</span>
          <input
            id={id}
            className="hig__range__field"
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
          />
          <label htmlFor={id} className="hig__range__label">
            {label}
          </label>
        </div>

        <p className="hig__range__instructions">{instructions}</p>
      </div>
    );
  }
}

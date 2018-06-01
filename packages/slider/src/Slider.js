import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Input from "./presenters/Input";

import "./slider.scss";

function generatedId() {
  return `slider-${Math.floor(Math.random() * 100000, 5)}`;
}

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
     * Instructional text for the field
     */
    instructions: PropTypes.string,
    /**
     * Text describing what the field represents
     */
    label: PropTypes.string,
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
     * Text describing why the field is required
     */
    required: PropTypes.string,
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
    id: generatedId(),
    min: "0",
    max: "100",
    step: "1"
  };

  state = {
    value: this.props.defaultValue || this.props.value
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) this.props.onChange(event);
  };

  render() {
    const {
      id,
      name,
      label,
      instructions,
      required,
      disabled,
      min,
      max,
      step,
      onBlur,
      onFocus,
      onInput
    } = this.props;
    const { value } = this.state;

    return (
      <div
        className={cx("hig__slider", {
          "hig__slider--disabled": disabled,
          "hig__slider--required": required
        })}
      >
        <div
          className="hig__slider__wrapper"
          data-range-min={min}
          data-range-max={max}
        >
          <span className="hig__slider__current-value">{value}</span>

          <Input
            id={id}
            onChange={this.handleChange}
            disabled={disabled}
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            onInput={onInput}
          />

          {label && (
            <label htmlFor={id} className="hig__slider__label">
              {label}
            </label>
          )}
        </div>

        {instructions && (
          <p className="hig__slider__instructions">{instructions}</p>
        )}

        {required && <p className="hig__slider__required-notice">{required}</p>}
      </div>
    );
  }
}

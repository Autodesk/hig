import React, { useState } from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@weave-design/behaviors";

import SliderPresenter from "./presenters/SliderPresenter";
import { AVAILABLE_SLIDER_TYPES } from "./constants";

/**
 * @typedef {string|number} Value
 */

/**
 * @typedef {Object} State
 * @property {Value} value
 */
const Slider = (props) => {
  const [valueHook, setValueHook] = useState(
    props.defaultValue || (props.max - props.min) / 2
  );

  const isControlled = () => props.value !== undefined;

  /**
   * @returns {Value}
   */
  const getValue = () => {
    if (isControlled()) {
      return props.value || 0;
    }

    return valueHook;
  };

  /**
   * @param {Value} value
   */
  const setValue = (valueParams) => {
    const { onChange } = props;

    if (onChange) onChange(Number(valueParams));

    if (!isControlled()) {
      setValueHook(valueParams);
    }
  };

  /**
   * @param {event} Event
   */
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {
    defaultValue, // exclude from otherProps
    onBlur,
    onChange, // exclude from otherProps
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    sliderRef,
    stylesheet,
    value, // exclude from otherProps
    ...otherProps
  } = props;

  const currentValue = getValue();

  return (
    <ControlBehavior
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {({
        hasFocus,
        hasHover,
        isPressed,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
      }) => (
        <SliderPresenter
          hasFocus={hasFocus}
          hasHover={hasHover}
          isPressed={isPressed}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          sliderRef={sliderRef}
          stylesheet={stylesheet}
          value={currentValue}
          {...otherProps}
        />
      )}
    </ControlBehavior>
  );
};

Slider.displayName = "Slider";

Slider.propTypes = {
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
   * Maximum value of the slider
   */
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Minimum value of the slider
   */
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
   * Called when user presses their mouse over the field
   */
  onMouseDown: PropTypes.func,
  /**
   * Called when user moves their mouse over the field
   */
  onMouseEnter: PropTypes.func,
  /**
   * Called when user moves their mouse out of the field
   */
  onMouseLeave: PropTypes.func,
  /**
   * Called when user releases their mouse press over the field
   */
  onMouseUp: PropTypes.func,
  /**
   * A callback ref that gets passed to the HTML input
   */
  sliderRef: PropTypes.func,
  /**
   * The granularity of each step on the slider
   */
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Value of the field
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Type of the slider
   */
  variant: PropTypes.oneOf(AVAILABLE_SLIDER_TYPES),
};

Slider.defaultProps = {
  disabled: false,
  variant: "continuous",
  max: "100",
  min: "0",
  step: "1",
};

export default Slider;

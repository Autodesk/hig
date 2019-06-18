import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";
import Input from "@hig/input";

import NumericInputPresenter from "./presenters/NumericInputPresenter";
import IncrementDecrementPresenter from "./presenters/IncrementDecrementPresenter";
import NumericInputBehaviour from "./behaviours/NumericInputBehaviour";

import { availableVariants, variants } from "./constants";

function NumericInput(props) {
  const {
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onChange: onChangeProp,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    disabled: disabledProp,
    stylesheet,
    variant,
    initialValue,
    value,
    step,
    ...otherProps
  } = props;

  return (
    <ControlBehavior
      onFocus={onFocusProp}
      onBlur={onBlurProp}
      onMouseEnter={onMouseEnterProp}
      onMouseLeave={onMouseLeaveProp}
    >
      {({
        hasHover,
        onMouseEnter,
        onMouseLeave,
        hasFocus,
        onFocus,
        onBlur
      }) => (
        <div>
          <NumericInputBehaviour
            value={value}
            initialValue={initialValue}
            onChange={onChangeProp}
            isDisabled={disabledProp}
            step={step}
          >
            {({ increment, decrement, value: controlledValue, setValue }) => {
              // We let the behaviour component be responsible for the ultimate
              // onChange event.
              const onDirectChange = event => {
                const newValue = event.target.value;

                // The onChange event from the Input is a full event but we just
                // want to return the changed value.
                setValue(newValue);
              };

              return (
                <NumericInputPresenter
                  isDisabled={disabledProp}
                  hasFocus={hasFocus}
                  hasHover={hasHover}
                  stylesheet={stylesheet}
                  variant={variant}
                >
                  <Input
                    disabled={disabledProp}
                    hasFocus={hasFocus}
                    hasHover={hasHover}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onChange={onDirectChange}
                    stylesheet={stylesheet}
                    variant={variant}
                    value={controlledValue}
                    {...otherProps}
                  />
                  <IncrementDecrementPresenter
                    disabled={disabledProp}
                    hasFocus={hasFocus}
                    hasHover={hasHover}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    stylesheet={stylesheet}
                    variant={variant}
                    value={controlledValue}
                    increment={increment}
                    decrement={decrement}
                    {...otherProps}
                  />
                </NumericInputPresenter>
              );
            }}
          </NumericInputBehaviour>
        </div>
      )}
    </ControlBehavior>
  );
}

NumericInput.propTypes = {
  /**
   * The initial value of the control
   */
  defaultValue: PropTypes.number,
  /**
   * Prevents the user from interacting with the input
   */
  disabled: PropTypes.bool,
  /**
   * Fired when an element has lost focus
   */
  onBlur: PropTypes.func,
  /**
   * Fired when an element has received focus
   */
  onFocus: PropTypes.func,
  /**
   * Fired when a pointing device is moved over the element
   */
  onMouseEnter: PropTypes.func,
  /**
   * Fired when the pointer of a pointing device is moved out of an element
   */
  onMouseLeave: PropTypes.func,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * The initial value of the control
   */
  initialValue: PropTypes.number,
  /**
   * The value of the control
   */
  value: PropTypes.string,
  /**
   * The visual variant of the input
   */
  variant: PropTypes.oneOf(availableVariants),
  /**
   * The quantity to increment/decrement the current value by when clicking
   * on the increment decrement buttons.
   *
   * Default value is 1
   */
  step: PropTypes.number,
  /**
   * Callback will be called when the input is changed either via the
   * buttons or direct user input
   */
  onChange: PropTypes.func
};

NumericInput.defaultProps = {
  variant: variants.LINE,
  step: 1
};

export default NumericInput;

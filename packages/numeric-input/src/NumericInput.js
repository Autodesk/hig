import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";

import { createCustomClassNames } from "@hig/utils";
import { ControlBehavior } from "@hig/behaviors";
import Input, { availableVariants } from "@hig/input";

import customStylesheet from "./customStylesheet";
import stylesheet from "./presenters/stylesheet";
import SpinnerBehavior from "./behaviors/SpinnerBehavior";
import SpinnerPresenter from "./presenters/SpinnerPresenter";

const NumericInput = (props) => {
  const {
    defaultValue,
    error,
    onChange,
    onBlur,
    onFocus,
    stylesheet: userStylesheet,
    variant,
    ...otherProps
  } = props;

  const {
    className,
    disabled,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    step,
    value,
  } = otherProps;

  const inputClassName = createCustomClassNames(className, "numeric_input");

  const numericInputStylesheet = (styles, propsParam, themeData) => {
    const numericInputStyles = customStylesheet(styles);
    return userStylesheet
      ? userStylesheet(numericInputStyles, propsParam, themeData)
      : numericInputStyles;
  };

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
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
      }) => (
        <SpinnerBehavior
          value={value}
          onChange={onChange}
          initialValue={defaultValue}
          step={step}
          disabled={disabled}
          onMouseLeave={handleMouseLeave}
        >
          {({
            onDirectChange,
            increment,
            decrement,
            value: controlledValue,
            mouseDownDecrement,
            mouseDownIncrement,
            clearTimer,
            mouseLeaveClearTimer,
            setInputRef,
          }) => (
            <div
              className={cx([
                css(stylesheet({}, {}).numericInputWrapper),
                className,
              ])}
            >
              <SpinnerPresenter
                {...otherProps}
                disabled={disabled}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={mouseLeaveClearTimer}
                onMouseUp={handleMouseUp}
                increment={increment}
                decrement={decrement}
                clearTimer={clearTimer}
                mouseDownDecrement={mouseDownDecrement}
                mouseDownIncrement={mouseDownIncrement}
                variant={variant}
                stylesheet={userStylesheet}
              />
              <Input
                {...otherProps}
                className={inputClassName}
                disabled={disabled}
                step={step}
                stylesheet={numericInputStylesheet}
                type="number"
                variant={variant}
                value={String(controlledValue)}
                error={error}
                hasFocus={hasFocus}
                hasHover={hasHover}
                onChange={onDirectChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                inputRef={setInputRef}
              />
            </div>
          )}
        </SpinnerBehavior>
      )}
    </ControlBehavior>
  );
};

NumericInput.displayName = "NumericInput";

NumericInput.propTypes = {
  /**
   * Initial value to display
   */
  defaultValue: PropTypes.number,
  /**
   * Specify if the value of the input is wrong
   */
  error: PropTypes.bool,
  /**
   * Fired when an element's value changes,
   * Passes back in the current value
   */
  onChange: PropTypes.func,
  /**
   * Fired when an element has received focus
   */
  onFocus: PropTypes.func,
  /**
   * Fired when an element has lost focus
   */
  onBlur: PropTypes.func,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * The visual variant of the numeric input
   */
  variant: PropTypes.oneOf(availableVariants),
};

NumericInput.defaultProps = {
  variant: "line",
};

export default NumericInput;

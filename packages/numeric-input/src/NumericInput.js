import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import { css } from "emotion";
import Input from "@hig/input";

import customStylesheet from "./customStylesheet";
import ControlBehavior from "@hig/behaviors/src/ControlBehavior";
import SpinnerBehavior from "./behaviors/SpinnerBehavior.js";
import SpinnerPresenter from "./presenters/SpinnerPresenter.js";

const variantTypes = ["line", "box"];

export default class NumericInput extends Component {
  static propTypes = {
    className: PropTypes.string,
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
     * How much you want the arrows to move up or down
     */
    placeholder: PropTypes.string,
    /**
     * Initial text to display in the input
     */
    step: PropTypes.number,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /**
     * Starting value for the input
     */
    value: PropTypes.number,
    /**
     * The visual variant of the numeric input
     */
    variant: PropTypes.oneOf(variantTypes),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.number
  };

  static defaultProps = {
    step: 1,
    variant: "line"
  };

  render() {
    const {
      disabled,
      onBlur,
      onChange,
      onFocus,
      onInput,
      placeholder,
      step,
      stylesheet,
      value,
      defaultValue: initialValue,
      variant,
      onClick,
      ...otherProps
    } = this.props;

    const numericInputStylesheet = (styles, props, themeData) => {
      const numericInputStyles = customStylesheet(styles, props, themeData);
      return stylesheet
        ? stylesheet(numericInputStyles, props, themeData)
        : numericInputStyles;
    };

    return (
      <div>
        <ControlBehavior
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseDown={this.props.onMouseDown}
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
            onMouseUp={this.props.onMouseUp}
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
              onMouseUp: handleMouseUp
            })=> (
              <SpinnerBehavior
                onClick={onClick}
                value={value}
                onChange={onChange}
                initialValue={initialValue}
                step={step}
                >
                  {({ handleClick, handleChange, increment, decrement, value: controlledValue, setValue, hasFocus: focused }) => {
                    const onDirectChange = event => {
                      const newValue = event.target.value;
                      setValue(newValue);
                    }; 
                  
                   return (
                    <div style={{position: "relative"}}>
                      
                      <SpinnerPresenter
                        value={value}
                        disabled={disabled}
                        hasFocus={hasFocus}
                        hasHover={hasHover}
                        isPressed={isPressed}
                        onBlur={handleBlur}
                        onClick={handleClick}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onMouseDown={handleMouseDown}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        increment={increment}
                        decrement={decrement}
                        {...otherProps}
                      />
                      <Input
                      {...otherProps}
                      className="numeric-input"
                      placeholder={placeholder}
                      step={step}
                      stylesheet={numericInputStylesheet}
                      tagName="input"
                      type="number"
                      variant={variant}
                      value={`${controlledValue}`}
                      hasFocus={hasFocus}
                      hasHover={hasHover}
                      onChange={onDirectChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      onMouseDown={handleMouseDown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseUp}
                      {...otherProps}
                    /> 
                  </div>
                  );
                }}
              </SpinnerBehavior>
            )}
          </ControlBehavior>
       
      </div>
    )
  }

}


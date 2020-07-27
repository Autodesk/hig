import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";

import { createCustomClassNames } from "@hig/utils";
import { ControlBehavior } from "@hig/behaviors";
import Input, { availableVariants } from "@hig/input";

import customStylesheet from "./customStylesheet";
import SpinnerBehavior from "./behaviors/SpinnerBehavior";
import SpinnerPresenter from "./presenters/SpinnerPresenter";


export default class NumericInput extends Component {
  static propTypes = {
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /**
     * The visual variant of the numeric input
     */
    variant: PropTypes.oneOf(availableVariants),

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
      step,
      stylesheet,
      value,
      defaultValue,
      variant,
      onClick,
      ...otherProps
    } = this.props;

    const {className} = otherProps;
    const inputClassName = createCustomClassNames(className, "input");

    const numericInputStylesheet = (styles, props, themeData) => {
      const numericInputStyles = customStylesheet(styles);
      return stylesheet
        ? stylesheet(numericInputStyles, props, themeData)
        : numericInputStyles;
    };

    return (
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
            onBlur: handleBlur,
            onFocus: handleFocus,
            onMouseDown: handleMouseDown,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onMouseUp: handleMouseUp
          }) => (
            <SpinnerBehavior
              onClick={onClick}
              value={value}
              onChange={onChange}
              initialValue={defaultValue}
              step={step}
              disabled={disabled}
            >
              {({
                handleClick,
                onDirectChange,
                increment,
                decrement,
                value: controlledValue
              }) => {
                return (
                  <div style={{ position: "relative" }}>
                    <SpinnerPresenter
                      disabled={disabled}
                      onBlur={handleBlur}
                      onClick={handleClick}
                      onFocus={handleFocus}
                      onMouseDown={handleMouseDown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseUp}
                      increment={increment}
                      decrement={decrement}
                      variant={variant}
                      stylesheet={stylesheet}
                      {...otherProps}
                    />
                    <Input
                      className = {cx(css(numericInputStylesheet.input), inputClassName)}
                      disabled={disabled}
                      step={step}
                      stylesheet={numericInputStylesheet}
                      type="number"
                      variant={variant}
                      value={String(controlledValue)}
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
    );
  }
}

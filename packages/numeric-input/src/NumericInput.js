import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import { css } from "emotion";
import Input from "@hig/input";
import IconButton from "@hig/icon-button";
import { CaretUp16, CaretDown16 } from "@hig/icons";

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
    step: PropTypes.string,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /**
     * Starting value for the input
     */
    value: PropTypes.string,
    /**
     * The visual variant of the numeric input
     */
    variant: PropTypes.oneOf(variantTypes),
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    step: "1",
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
              <div>
              <SpinnerBehavior
                onClick={onClick}
                value={value}
                onChange={onChange}
                >
                  {({ handleClick, handleChange })=> (
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
                      {...otherProps}
                    />
                  )}
              </SpinnerBehavior>
               <Input
               {...otherProps}
               className="numeric-input"
               placeholder={placeholder}
               step={step}
               stylesheet={numericInputStylesheet}
               tagName="input"
               type="number"
               variant={variant}
               value={value}
               hasFocus={hasFocus}
               hasHover={hasHover}
               onBlur={handleBlur}
               onFocus={handleFocus}
               onMouseDown={handleMouseDown}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onMouseUp={handleMouseUp}
               {...otherProps}
             /> </div>
            )}
          </ControlBehavior>
       
      </div>
    )
  }

}

  /*

  render() {
    const { variant, stylesheet, placeholder, onBlur, onFocus, ...otherProps } = this.props;
    const { className } = otherProps;

    const numericInputStylesheet = (styles, props, themeData) => {
      const numericInputStyles = customStylesheet(styles, props, themeData);
      return stylesheet
        ? stylesheet(numericInputStyles, props, themeData)
        : numericInputStyles;
    };


    return (
      <div className={className} style={{position: "relative"}}>
          <ControlBehavior
            onBlur={onBlur}
            onFocus={onFocus}>
            {<div>
              <CaretUp16
                onClick={e=>increaseValue(e)}
                />
              </div>
            <div>
                <CaretDown16    
                  onClick={e => decreaseValue(e)}  
                  />
              </div>}
          </ControlBehavior>
            
          <Input
            {...otherProps}
            className="numeric-input"
            placeholder={this.props.placeholder}
            step={this.props.step}
            stylesheet={numericInputStylesheet}
            tagName="input"
            type="number"
            variant={variant}
            value={this.props.value}
          />
      </div>
    );
  }
}

        <IconButton
          {...otherProps}
          icon={<CaretUp16 />}
          onClick={e => increaseValue(e)}
          stylesheet={numericInputStylesheet}
          title="Up"
        />
        <IconButton
          {...otherProps}
          icon={<CaretDown16 />}
          onClick={e => decreaseValue(e)}
          stylesheet={numericInputStylesheet}
          title="Down"
        />

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
          onMouseUp: handleMouseUp
        }) => (
          <CheckboxBehavior
            checked={controlledChecked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            onClick={onClick}
          >
            {({ checked, handleChange, handleClick }) => (
              <CheckboxPresenter
                checked={checked}
                disabled={disabled}
                hasFocus={hasFocus}
                hasHover={hasHover}
                indeterminate={indeterminate}
                isPressed={isPressed}
                onBlur={handleBlur}
                onChange={handleChange}
                onClick={handleClick}
                onFocus={handleFocus}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                {...otherProps}
              />
            )}
          </CheckboxBehavior>
        )}
      </ControlBehavior>

          
    const increaseValue = e => {
      // We need to find the nearest number input incase there are many on the page
      // This element is two above
      console.log(e.currentTarget);
      const sibling = e.currentTarget.parentNode.nextSibling.nextSibling;
      const numberInput = sibling.querySelector(".numeric-input__input");
      numberInput.stepUp();
      numberInput.select();
    };

    const decreaseValue = e => {
      // This element is one above
      console.log(e.target);
      const sibling = e.currentTarget.parentNode.nextSibling;
      const numberInput = sibling.querySelector(".numeric-input__input");
      numberInput.stepDown();
      numberInput.select();
    };
    */

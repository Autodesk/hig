import React, { Component } from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import CheckboxPresenter from "./presenters/CheckboxPresenter";
import CheckboxBehavior from "./behaviors/CheckboxBehavior";

export default class Checkbox extends Component {
  static propTypes = {
    /**
     * Checks the checkbox
     */
    checked: PropTypes.bool,
    /**
     * Initially checks the checkbox, but allows user action to change it
     */
    defaultChecked: PropTypes.bool,
    /**
     * Prevents user actions on the checkbox
     */
    disabled: PropTypes.bool,
    /**
     * Sets indeterminate state for checkbox
     */
    indeterminate: PropTypes.bool,
    /**
     * The name of the checkbox as submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user clicks on the checkbox
     */
    onClick: PropTypes.func,
    /**
     * Called when user puts focus on the field
     */
    onFocus: PropTypes.func,
    /**
     * Triggers when the user's mouse is pressed over the checkbox
     */
    onMouseDown: PropTypes.func,
    /**
     * Triggers when the user's mouse is over the checkbox
     */
    onMouseEnter: PropTypes.func,
    /**
     * Triggers when the user's mouse is no longer over the checkbox
     */
    onMouseLeave: PropTypes.func,
    /**
     * Triggers when the user's mouse is no longer pressed over the checkbox
     */
    onMouseUp: PropTypes.func,
    /**
     * Marks the field as required, text shown to explain requirement
     */
    required: PropTypes.string,
    /**
     * Value submitted with a form if checked
     */
    value: PropTypes.string
  };

  render() {
    const {
      checked: controlledChecked,
      defaultChecked,
      disabled,
      indeterminate,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      required,
      value
    } = this.props;

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
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                onClick={handleClick}
                onFocus={handleFocus}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                required={required}
                value={value}
              />
            )}
          </CheckboxBehavior>
        )}
      </ControlBehavior>
    );
  }
}

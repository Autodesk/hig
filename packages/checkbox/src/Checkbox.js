import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import CheckboxPresenter from "./presenters/CheckboxPresenter";
import CheckboxBehavior from "./behaviors/CheckboxBehavior";

const Checkbox = props => {
  const {
    checkboxRef,
    checked: controlledChecked,
    defaultChecked,
    disabled,
    indeterminate,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    stylesheet,
    ...otherProps
  } = props;

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
              checkboxRef={checkboxRef}
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
              stylesheet={stylesheet}
              {...otherProps}
            />
          )}
        </CheckboxBehavior>
      )}
    </ControlBehavior>
  );
};

Checkbox.propTypes = {
  /**
   * A callback ref that gets passed to the HTML input
   */
  checkboxRef: PropTypes.func,
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
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Value submitted with a form if checked
   */
  value: PropTypes.string
};

export default Checkbox;

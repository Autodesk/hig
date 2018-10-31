import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import InputPresenter from "./presenters/InputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";

import { variants, availableVariants, availableInputModes } from "./constants";

function Wrapper(props) {
  if (props.variant === variants.PLAIN) {
    return props.children;
  }

  return <InputHaloPresenter {...props} />;
}

Wrapper.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(availableVariants)
};

function Input(props) {
  return (
    <ControlBehavior
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {({
        hasHover,
        onMouseEnter,
        onMouseLeave,
        hasFocus,
        onFocus,
        onBlur
      }) => (
        <Wrapper
          isDisabled={props.disabled}
          hasFocus={hasFocus}
          hasHover={hasHover}
          variant={props.variant}
        >
          <InputPresenter
            autoComplete={props.autoComplete}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            hasFocus={hasFocus}
            hasHover={hasHover}
            id={props.id}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            name={props.name}
            onBlur={onBlur}
            onChange={props.onChange}
            onFocus={onFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            pattern={props.pattern}
            readOnly={props.readOnly}
            required={props.required}
            spellCheck={props.spellCheck}
            tabIndex={props.tabIndex}
            variant={props.variant}
            value={props.value}
          />
        </Wrapper>
      )}
    </ControlBehavior>
  );
}

Input.propTypes = {
  /**
   * Indicates if the input can be automatically completed by the browser
   */
  autoComplete: PropTypes.bool,
  /**
   * The initial value of the control
   */
  defaultValue: PropTypes.string,
  /**
   * Prevents the user from interacting with the input
   */
  disabled: PropTypes.bool,
  /**
   * HTML ID attribute
   */
  id: PropTypes.string,
  /**
   * A hint to browsers for which virtual keyboard to display
   */
  inputMode: PropTypes.oneOf(availableInputModes),
  /**
   * The maximum number of characters that the user can enter
   */
  maxLength: PropTypes.string,
  /**
   * The minimum number of characters that the user can enter
   */
  minLength: PropTypes.string,
  /**
   * Submitted with the control's value as part of the form data
   */
  name: PropTypes.string,
  /**
   * Fired when an element has lost focus
   */
  onBlur: PropTypes.func,
  /**
   * Fired when the value is changed by the user
   */
  onChange: PropTypes.func,
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
   * A regular expression that the control's value is checked against
   */
  pattern: PropTypes.string,
  /**
   * Prevents the user from modifying the value of the input
   */
  readOnly: PropTypes.bool,
  /**
   * Specifies that the user must fill in a value before submitting a form
   */
  required: PropTypes.bool,
  /**
   * Indicates that the element needs to have its spelling and grammar checked
   */
  spellCheck: PropTypes.bool,
  /**
   * The position of the element in the tabbing navigation order for the current document
   */
  tabIndex: PropTypes.string,
  /**
   * The value of the control
   */
  value: PropTypes.string,
  /**
   * The visual variant of the input
   */
  variant: PropTypes.oneOf(availableVariants)
};

Input.defaultProps = {
  variant: variants.LINE
};

export default Input;

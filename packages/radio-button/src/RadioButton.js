import React, { Component } from "react";
import PropTypes from "prop-types";
import { CheckboxBehavior } from "@hig/checkbox";

import RadioButtonPresenter from "./presenters/RadioButtonPresenter";

export default class RadioButton extends Component {
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
     * Text identifying the field
     */
    label: PropTypes.string,
    /**
     * The name of the checkbox as submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when user clicks on the field
     */
    onClick: PropTypes.func,
    /**
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus on the field
     */
    onFocus: PropTypes.func,
    /**
     * Marks the field as required, text shown to explain requirment
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
      label,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      required,
      value
    } = this.props;

    return (
      <CheckboxBehavior
        checked={controlledChecked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onClick={onClick}
      >
        {({ checked, handleClick }) => (
          <RadioButtonPresenter
            checked={checked}
            disabled={disabled}
            label={label}
            name={name}
            onBlur={onBlur}
            onClick={handleClick}
            onFocus={onFocus}
            required={required}
            value={value}
          />
        )}
      </CheckboxBehavior>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
import FormInput from "./FormInput";

import "./CheckboxPresenter.scss";

export default function CheckboxPresenter(props) {
  const labelClasses = "hig__checkbox-v1";

  const {name, label} = props;

  return (
    <FormInput>
       <div className="hig__input-button hig__input-button--checkbox">
         <input
          type="checkbox"
          className="hig__input-button__input"
          name={name}/>
        <span className="hig__input-button__input-wrapper" />
        <label className={labelClasses}>
          {label}</label>
      </div>
    </FormInput>
  );
}

CheckboxPresenter.propTypes = {
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
   * HTML ID attribute
   */
  id: PropTypes.string,
  /**
   * Sets indeterminate state for checkbox
   */
  indeterminate: PropTypes.bool,
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
   * Called when user changes the value of the field
   */
  onChange: PropTypes.func,
  /**
   * Called when user puts focus on the field
   */
  onFocus: PropTypes.func,
  /**
   * Marks the field as required, text shown to explain requirement
   */
  required: PropTypes.string,
  /**
   * Value submitted with a form if checked
   */
  value: PropTypes.string
};

CheckboxPresenter.defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    name: "checkbox",
    value: "value",
    label: "label"
};



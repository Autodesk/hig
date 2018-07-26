import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { generateId } from "@hig/utils";

import ButtonPresenter from "./ButtonPresenter";
import "./RadioButtonPresenter.scss";

export default class RadioButtonPresenter extends Component {
  static propTypes = {
    /**
     * Checks the checkbox
     */
    checked: PropTypes.bool,
    /**
     * Prevents user actions on the radio button
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

  static defaultProps = {
    checked: false,
    disabled: false,
    name: "radiobutton",
    value: "value"
  };

  render() {
    const {
      checked,
      disabled,
      label,
      name,
      onBlur,
      onClick,
      onFocus,
      required,
      value
    } = this.props;

    const labelClasses = cx(["hig__radio-button__label"]);

    const wrapperClasses = cx([
      "hig__radio-button",
      {
        "hig__radio-button--required": required,
        "hig__radio-button--checked": checked
      }
    ]);

    const id = generateId("radio-button");

    return (
      <div className={wrapperClasses}>
        <input
          id={id}
          checked={checked}
          className="hig__radio-button__input"
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          type="radio"
          value={value}
        />
        <ButtonPresenter checked={checked} disabled={disabled} />
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import FormInput from "../presenters/FormInput";

import icons from '@hig/icons';

import "./CheckboxPresenter.scss";

export default class CheckboxPresenter extends Component {
  static propTypes = {
    /**
     * Checks the checkbox
     */
    checked: PropTypes.bool,
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
     * Called when user clicks on the checkbox
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
     * Marks the field as required, text shown to explain requirement
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
    indeterminate: false,
    name: "checkbox",
    value: "value",
    label: "label"
  };

  setIndeterminate = input => {
    if (input) {
      input.indeterminate = this.props.indeterminate;
    }
  };

  render() {
    const {
      checked,
      disabled,
      indeterminate,
      label,
      name,
      onBlur,
      onClick,
      onChange,
      onFocus,
      required
    } = this.props;

    const labelClasses = cx(["hig__input-button__label"]);

    const wrapperClasses = cx([
      "hig__input-button",
      "hig__input-button--checkbox",
      {
        "hig__input-button--required": required,
        "hig__input-button--checked": checked
      }
    ]);

    const iconClasses = cx([
      "hig__input-button__input-wrapper",
      {
        "checked": checked,
        "indeterminate": indeterminate,
        "disabled": disabled
      }
    ]);

    /** TODO: Generate ID */
    const ID = "nvdwhgnekl";

    return (
      <FormInput>
        <div className={wrapperClasses}>
          <input
            id={ID}
            checked={checked}
            className="hig__input-button__inputV1"
            disabled={disabled}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
            onFocus={onFocus}
            ref={this.setIndeterminate}
            type="checkbox"
          />
          <span className={iconClasses}>
            <span className="check" dangerouslySetInnerHTML={{ __html: icons['check-white-24'] }}/>
            <span className="check--indeterminate" dangerouslySetInnerHTML={{ __html: icons['checkmark-indeterminate-16'] }}/>
            <span className="check--disabled" dangerouslySetInnerHTML={{ __html: icons['check-disabled-16'] }}/>
          </span>
          <label htmlFor={ID} className={labelClasses}>
            {label}
          </label>
        </div>
      </FormInput>
    );
  }
}

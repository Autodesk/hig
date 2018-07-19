import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
// import FormInput from "./FormInput";

//import "./TextAreaPresenter.scss";

export default class TextAreaPresenter extends Component {
  static propTypes = {
    /**
     * Initial value of the field
     */
    defaultValue: PropTypes.string,
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Instructional text for the field
     */
    instructions: PropTypes.string,
    /**
     * Text describing what the field represents
     */
    label: PropTypes.string,
    /**
     * Name of the field when submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
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
     * Example of what the user should type into the field
     */
    placeholder: PropTypes.string,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * Corresponds to the type attribute of an <input>. Relevant for designating a password field, for example.
     */
    type: PropTypes.string,
    /**
     * Initial value of the field
     */
    value: PropTypes.string
  };

  static defaultProps = {
    label: "Comments",
    placeholder: "Enter your comments here.",
    required: "This field is required.",
    instructions: "Pretend that instructions are here by default"
  };


  render() {
    const {
      defaultValue,
      disabled,
      instructions,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      onInput,
      placeholder,
      required,
      type,
      value
    } = this.props;



    const wrapperClasses = cx([
      "hig__text-area",
      {
        "hig__text-area--required": required,
        "hig__text-area--disabled": disabled
      }
    ]);

    const textAreaClasses = cx([
      "hig__text-area__field",
      {
        "hig__text-area__field--no-value": !defaultValue || !value
      }
    ])

    const labelClasses = cx([
      "hig__text-area__label",
      {
        "hig__text-area__label--visible": label,
      }
    ])

    const instructionClasses = cx([
      {
        "hig__text-area__instructions": instructions
      }
    ])

    const requiredClasses = cx([
      {
        "hig__text-area__required-notice": required
      }
    ])

    const ID = `text-area-${Math.floor(Math.random() * 100000, 5)}`;

    return (
      <div className={wrapperClasses}>
        <textarea
          className={textAreaClasses}
          id={ID}
          defaultValue={defaultValue}
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onInput={onInput}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
        <label
          htmlFor={ID}
          className={labelClasses}
          dangerouslySetInnerHTML={{__html: label}}
        />
        <p
          className={instructionClasses}
          dangerouslySetInnerHTML={{__html: instructions}}
        />
        <p
          className={requiredClasses}
          dangerouslySetInnerHTML={{__html: required}}
        />

      </div>
    );
  }
}
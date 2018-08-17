import React, { Component } from "react";
import PropTypes from "prop-types";
import TextFieldBehavior from "./behaviors/TextFieldBehavior";
import TextFieldPresenter from "./presenters/TextFieldPresenter";

export default class TextField extends Component {
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
     * Error text for the field. Setting this value applies error styling to the entire component.
     */
    errors: PropTypes.string,
    /**
     * When true, displays passed error text. When false, displays instructions with error styling.
     */
    hideInstructionsOnErrors: PropTypes.bool,
    /**
     * HTML ID attribute
     */
    id: PropTypes.string,
    /**
     * Icon element that precedes the input.
     */
    icon: PropTypes.node,
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
     * Called when user clicks the clear button
     */
    onClearButtonClick: PropTypes.func,
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
     * Accessible title of the clear button
     */
    clearButtonTitle: PropTypes.string,
    /**
     * Marks input as read-only
     */
    readOnly: PropTypes.bool,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * When true, causes the clear button to appear
     */
    showClearButton: PropTypes.bool,
    /**
     * Corresponds to the type attribute of an <input>. Relevant for designating a password field, for example.
     */
    type: PropTypes.string,
    /**
     * Initial value of the field
     */
    value: PropTypes.string
  };

  render() {
    const {
      defaultValue,
      onChange,
      onClearButtonClick,
      value: controlledValue,
      ...presenterProps
    } = this.props;

    return (
      <TextFieldBehavior
        defaultValue={defaultValue}
        onChange={onChange}
        onClearButtonClick={onClearButtonClick}
        value={controlledValue}
      >
        {({ value, handleChange, handleInputClear }) => (
          <TextFieldPresenter
            {...presenterProps}
            value={value}
            onChange={handleChange}
            onClearButtonClick={handleInputClear}
          />
        )}
      </TextFieldBehavior>
    );
  }
}

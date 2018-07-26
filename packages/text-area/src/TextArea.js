import React, { Component } from "react";
import PropTypes from "prop-types";

import TextAreaPresenter from "./presenters/TextAreaPresenter";

export default class TextArea extends Component {
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

  state = {
    value: this.props.defaultValue
  };

  handleChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    this.setState({
      value: event.target.value
    });
  };

  renderValue() {
    if (this.props.value !== undefined) {
      return this.props.value;
    }
    return this.state.value;
  }

  render() {
    return (
      <TextAreaPresenter
        {...this.props}
        value={this.renderValue()}
        onChange={this.handleChange}
      />
    );
  }
}

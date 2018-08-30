import React, { Component } from "react";
import Icon from "@hig/icon";
import { TextFieldPresenter } from "@hig/text-field";
import "@hig/icon/build/index.css";
import "@hig/text-field/build/index.css";
import PropTypes from "prop-types";

import "./InputPresenter.scss";

export default class InputPresenter extends Component {
  static propTypes = {
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Error text for the field. Setting this value applies error styling to the entire component.
     */
    errors: PropTypes.string,
    /**
     * Allows managing field's focus via prop. Setting this value overrides the internal focus state management.
     */
    focused: PropTypes.bool,
    /**
     * Prevents user actions on the field
     */
    hasTextEntry: PropTypes.bool,
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
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * When true, causes the clear button to appear
     */
    showClearButton: PropTypes.bool,
    /**
     * Value of the field
     */
    value: PropTypes.string
  };

  render() {
    let textFieldPresenter;
    const { hasTextEntry, ...inputProps } = this.props;

    if (hasTextEntry) {
      textFieldPresenter = <TextFieldPresenter {...inputProps} type="text" />;
    } else {
      textFieldPresenter = (
        <TextFieldPresenter {...inputProps} type="button" readOnly />
      );
    }

    return (
      <div className="hig__dropdown__input-wrapper">
        {textFieldPresenter}
        <span className="hig__dropdown__input-caret">
          {/* @TODO: there are variations of the TextField with multiple icons at the end of the input. These icon nodes should be passed as props to TextField. */}
          <Icon name="caret" />
        </span>
      </div>
    );
  }
}

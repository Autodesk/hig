import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton, { types } from "@hig/icon-button";
import { ClearSmall24 } from "@hig/icons";
import { generateId } from "@hig/utils";
import "@hig/icon-button/build/index.css";

import Input from "./Input";
import "./TextFieldPresenter.scss";

export default class TextFieldPresenter extends Component {
  static propTypes = {
    /**
     * Title attribute for the clear button. Used for accessibility purposes
     */
    clearButtonTitle: PropTypes.string,
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
     * Indicates the maximum number of characters the user can enter
     */
    maxLength: PropTypes.number,
    /**
     * Indicates the minimum number of characters the user can enter
     */
    minLength: PropTypes.number,
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
     * Value of the field
     */
    value: PropTypes.string
  };

  static defaultProps = {
    clearButtonTitle: "Clear field",
    type: "text"
  };

  state = {
    focused: false
  };

  id = generateId("text-field");

  handleFocus = event => {
    this.setState({ focused: true });
    if (this.props.onFocus) this.props.onFocus(event);
  };

  handleBlur = event => {
    this.setState({ focused: false });
    if (this.props.onBlur) this.props.onBlur(event);
  };

  hasClearableInput() {
    return (
      this.props.showClearButton &&
      this.props.value &&
      this.props.value.length > 0
    );
  }

  shouldShowInstructions() {
    if (this.props.instructions) {
      if (this.props.errors) {
        return !this.props.hideInstructionsOnErrors;
      }
      return true;
    }

    return false;
  }

  render() {
    const hasClearableInput = this.hasClearableInput();

    const isFocused =
      this.props.focused !== undefined
        ? this.props.focused
        : this.state.focused;

    const {
      id = this.id,
      type,
      errors,
      focused,
      hideInstructionsOnErrors,
      icon,
      instructions,
      label,
      onClearButtonClick,
      required,
      showClearButton,
      clearButtonTitle,
      ...inputProps
    } = this.props;

    const wrapperClasses = cx("hig__text-field-v1", {
      "hig__text-field-v1--button": type === "button",
      "hig__text-field-v1--required": required,
      "hig__text-field-v1--disabled": inputProps.disabled,
      "hig__text-field-v1--clear-button-visible": hasClearableInput,
      "hig__text-field-v1--with-errors": errors
    });

    return (
      <div className={wrapperClasses}>
        <div
          className={cx("hig__text-field-v1__content", {
            "hig__text-field-v1__content--with-icon": icon
          })}
        >
          <div
            className={cx("hig__text-field-v1__input-wrapper", {
              "hig__text-field-v1__input-wrapper--focused": isFocused,
              "hig__text-field-v1__input-wrapper--with-errors": errors,
              "hig__text-field-v1__input-wrapper--disabled": inputProps.disabled
            })}
          >
            {label && <span className="hig__text-field-v1__label-spacer" />}

            {label && (
              <label
                htmlFor={id}
                className={cx("hig__text-field-v1__label", {
                  "hig__text-field-v1__label--input-focused": isFocused,
                  "hig__text-field-v1__label--required": required,
                  "hig__text-field-v1__label--with-value": this.props.value
                })}
              >
                {label}
              </label>
            )}

            <div className="hig__text-field-v1__input-row">
              {icon && (
                <label
                  className={cx("hig__text-field-v1__icon", {
                    "hig__text-field-v1__icon--disabled": this.props.disabled
                  })}
                  htmlFor={id}
                >
                  {icon}
                </label>
              )}

              <Input
                id={id}
                type={type}
                {...inputProps}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
              />

              {hasClearableInput && (
                <span className="hig__text-field-v1__clear">
                  <IconButton
                    type={types.TRANSPARENT}
                    icon={<ClearSmall24 />}
                    title={clearButtonTitle}
                    onClick={onClearButtonClick}
                  />
                </span>
              )}
            </div>
          </div>

          {this.shouldShowInstructions() && (
            <p className="hig__text-field-v1__instructions">{instructions}</p>
          )}

          {errors && <p className="hig__text-field-v1__errors">{errors}</p>}

          {required && (
            <p className="hig__text-field-v1__required-notice">{required}</p>
          )}
        </div>
      </div>
    );
  }
}

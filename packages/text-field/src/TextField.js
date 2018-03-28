import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class TextField extends Component {
  static propTypes = {
    /**
     * Initial value of the field, user actions will override
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
     * Icon for the field, either the name of an included icon, or an svg string of a custom icon
     */
    icon: PropTypes.string,
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
     * Corresponds to the type attribute of an <input>. Relevant for designating a password field, for example.
     */
    type: PropTypes.string,
    /**
     * Value of the field
     */
    value: PropTypes.string
  };

  static defaultProps = {
    type: "text"
  };

  constructor(props) {
    super(props);

    const generatedId = Math.floor(Math.random() * 100000, 5);
    this.state = {
      id: `text-field-${generatedId}`,
      value: this.props.defaultValue || this.props.value
    };
  }

  render() {
    return (
      <div
        className={cx("hig__text-field", {
          "hig__text-field--required": this.props.required
        })}
      >
        {this.props.icon && (
          <div className="hig__text-field__icon-spacer">{this.props.icon}</div>
        )}

        <div className="hig__text-field__content">
          <div className="hig__text-field__input-wrapper">
            <label className="hig__text-field__icon" htmlFor={this.state.id} />

            <input
              name={this.props.name}
              id={this.state.id}
              className={cx("hig__text-field__input", {
                "hig__text-field__input--no-value": !this.state.value
              })}
              type={this.props.type}
              disabled={this.props.disabled}
              placeholder={this.props.placeholder}
              value={this.state.value}
              onBlur={this.props.onBlur}
              onChange={this.props.onChange}
              onFocus={this.props.onFocus}
              onInput={this.props.onInput}
            />

            {this.props.label && (
              <label
                htmlFor={this.state.id}
                className={cx("hig__text-field__label", {
                  "hig__text-field__label--visible": this.props.label
                })}
              >
                {this.props.label}
              </label>
            )}

            {this.props.showClearButton && (
              <button
                className="hig__text-field__clear-button hig__text-field--clear-button-visible"
                onClick={this.props.onClearButtonClick}
              />
            )}
          </div>

          {(this.props.instructions ||
            (this.props.errors && !this.props.hideInstructionsOnErrors)) && (
            <p className="hig__text-field__instructions">
              {this.props.instructions}
            </p>
          )}

          {this.props.errors && (
            <p className="hig__text-field__errors">{this.props.errors}</p>
          )}

          {this.props.required && (
            <p className="hig__text-field__required-notice">
              {this.props.required}
            </p>
          )}
        </div>
      </div>
    );
  }
}

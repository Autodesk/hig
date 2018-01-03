import React, { Component } from "react";
import PropTypes from "prop-types";
import PasswordFieldAdapter from "../../../adapters/FormElements/PasswordFieldAdapter";

export default class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      hasFocus: false
    };
  }

  handleBlur = event => {
    this.props.onBlur(event);
    this.setState({ hasFocus: false });
  };

  handleFocus = event => {
    this.props.onFocus(event);
    this.setState({ hasFocus: true });
  };

  handlePasswordHideButtonClick = event => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ showPassword: false });
  };

  handlePasswordRevealButtonClick = event => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ showPassword: true });
  };

  render() {
    return (
      <PasswordFieldAdapter
        {...this.props}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onPasswordHideButtonClick={this.handlePasswordHideButtonClick}
        onPasswordRevealButtonClick={this.handlePasswordRevealButtonClick}
        revealPassword={this.state.showPassword}
        showPasswordHideButton={this.state.hasFocus && this.state.showPassword}
        showPasswordRevealButton={
          this.state.hasFocus && !this.state.showPassword
        }
      />
    );
  }
}

PasswordField.propTypes = {
  /**
   * Disable the field, preventing user interaction
   */
  disabled: PropTypes.bool,
  /**
   * Initial value of the field
   */
  initialValue: PropTypes.string,
  /**
   * A short description or suggestion
   */
  instructions: PropTypes.string,
  /**
   * Describes what the field controls
   */
  label: PropTypes.string,
  /**
   * Set on the element's name attribute
   */
  name: PropTypes.string,
  /**
   * Called when user moves focus away from the field
   */
  onBlur: PropTypes.func,
  /**
   * Called when user enters a new value and moves focus away from the field
   */
  onChange: PropTypes.func,
  /**
   * Called when user moves focus onto the field
   */
  onFocus: PropTypes.func,
  /**
   * Called when user enters a new value
   */
  onInput: PropTypes.func,
  /**
   * Data entry suggestions or formatting examples
   */
  placeholder: PropTypes.string,
  /**
   * Indicates a field must be filled before the form may be completed
   */
  required: PropTypes.string,
  /**
   * Controlled value of the field
   */
  value: PropTypes.string
};

PasswordField.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
  onInput: () => {}
};

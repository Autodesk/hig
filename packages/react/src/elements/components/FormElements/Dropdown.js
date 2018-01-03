import React, { Component } from "react";
import PropTypes from "prop-types";

import DropdownAdapter from "../../../adapters/FormElements/DropdownAdapter";
import Option from "./Option";

export default class Dropdown extends Component {
  static defaultProps = {
    options: [],
    onChange: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: this.getDefaultValue()
    };
  }

  getDefaultValue() {
    const { defaultValue, value } = this.props;

    if (value !== undefined) {
      return value;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    }
    return "";
  }

  getRenderedValue() {
    const { value } = this.props;

    if (value !== undefined) {
      return value;
    }
    return this.state.value;
  }

  setSelectedValue = selectedOptionValue => {
    this.props.onChange(selectedOptionValue);

    this.setState({
      open: false,
      value: selectedOptionValue
    });
  };

  openDropdown = () => {
    this.setState({ open: true });
  };

  closeDropdown = () => {
    this.setState({ open: false });
  };

  render() {
    const selectedOption =
      this.props.options.find(o => o.value === this.getRenderedValue()) || {};

    return (
      <DropdownAdapter
        {...this.props}
        open={this.state.open}
        selectedOptionLabel={selectedOption.label}
        onTargetClick={this.openDropdown}
        onClickOutside={this.closeDropdown}
      >
        {this.props.options.map(option => (
          <Option
            key={option.value}
            {...option}
            selected={option.value === selectedOption.value}
            checked={option.value === selectedOption.value}
            onClick={this.setSelectedValue}
          />
        ))}
      </DropdownAdapter>
    );
  }
}

Dropdown.propTypes = {
  /**
   * {string} label for the the dropdown
   */
  label: PropTypes.string,
  /**
   * {string} instructions for the dropdown
   */
  instructions: PropTypes.string,
  /**
   * {string} placeholder for the dropdown
   */
  placeholder: PropTypes.string,
  /**
   * {bool} makes the dropdown disabled
   */
  disabled: PropTypes.bool,
  /**
   * {string} makes the field required
   */
  required: PropTypes.string,
  /**
   * {string} option that is selected on construction
   */
  value: PropTypes.string,
  /**
   * {string} default selected option
   */
  defaultValue: PropTypes.string,
  /**
   * {Array} array with objects, objects have a 'label' and a 'value'
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  /**
   * Calls the provided callback when option is changed
   */
  onChange: PropTypes.func,
  /**
   * Calls the provided callback when focus moves away from the dropdown
   */
  onBlur: PropTypes.func,
  /**
   * Calls the provided callback when the user focuses on the dropdown
   */
  onFocus: PropTypes.func,
  /**
   * Calls the provided callback when the user presses a key while the dropdown has focus
   */
  onKeypress: PropTypes.func
};

import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import DropdownAdapter from '../../../adapters/FormElements/DropdownAdapter.js';
import Option from './Option';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: this.getDefaultValue()
    };
  }

  static defaultProps = {
    options: [],
    onChange: () => {}
  }

  getDefaultValue() {
    const { defaultValue, value } = this.props;

    if (value !== undefined) {
      return value;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return '';
    }
  }

  getRenderedValue() {
    const { value } = this.props;

    if (value !== undefined) {
      return value;
    } else {
      return this.state.value;
    }
  }

  setSelectedValue = (selectedOptionValue) => {
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
    const selectedOption = this.props.options.find(o => o.value === this.getRenderedValue()) || {};

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
            onClick={this.setSelectedValue}
          />
        ))}
      </DropdownAdapter>
    );
  }
}

Dropdown.propTypes = {
  label: PropTypes.string,
  instructions: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeypress: PropTypes.func
};

Dropdown.__docgenInfo = {
  props: {
    label: {
      description: "{string} label for the the dropdown"
    },
    instructions: {
      description: "{string} instructions for the dropdown"
    },
    placeholder: {
      description: "{string} placeholder for the dropdown"
    },
    disabled: {
      description: "{bool} makes the dropdown disabled"
    },
    required: {
      description: "{string} makes the field required"
    },
    value: {
      description: "{string} option that is selected on construction"
    },
    defaultValue: {
      description: "{string} default selected option"
    },
    options: {
      description: "{Array} array with objects, objects have a 'label' and a 'value'"
    },
    onChange: {
      description:
        "Calls the provided callback when option is changed"
    },
    onBlur: {
      description:
        "Calls the provided callback when focus moves away from the dropdown"
    },
    onFocus: {
      description:
        "Calls the provided callback when the user focuses on the dropdown"
    },
    onKeypress: {
      description:
        "Calls the provided callback when the user presses a key while the dropdown has focus"
    }
  }
};

export default Dropdown;

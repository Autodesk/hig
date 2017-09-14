import React, { Component } from 'react';
import DropdownAdapter
  from '../../../adapters/FormElements/DropdownAdapter.js';
import * as PropTypes from 'prop-types';

const OptionAdapter = DropdownAdapter.Option;

class Dropdown extends Component {

  static propTypes = {
    label: PropTypes.string,
    instructions: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.string,
    selectedOption: PropTypes.string,

    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })),

    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeypress: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    if(this.props.selectedOption){
      this.setState({
        selectedOptionLabel: this.props.selectedOption
      })
    }
  }

  setSelectedValue = (selectedOption) => {
    if(this.props.onChange){
      this.props.onChange(selectedOption.label);
    }
    this.setState({
      selectedOptionLabel: selectedOption.label,
      open: false
    });
  };

  openDropdown = () => {
    this.setState({ open: true });
  };

  closeDropdown = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <DropdownAdapter
        label={this.props.label}
        instructions={this.props.instructions}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        required={this.props.required}
        
        open={this.state.open}
        selectedOptionLabel={this.state.selectedOptionLabel}
        onTargetClick={this.openDropdown}
        onClickOutside={this.closeDropdown}

        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onKeypress={this.props.onKeypress}
      >
        {this.props.options && this.props.options.map(option => (
          <OptionAdapter
            label={option.label}
            value={option.value}
            selected={option.label === this.state.selectedOptionLabel}
            key={option.label}
            onClick={this.setSelectedValue.bind(this, {
              label: option.label,
              value: option.value
            })}
          />
        ))}
      </DropdownAdapter>
    );
  }
}

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
    selectedOption: {
      description: "{string} option that is selected on construction"
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
    onKeypress: {
      description:
        "Calls the provided callback when the user presses a key while the dropdown has focus"
    },
    onFocus: {
      description:
        "Calls the provided callback when the user focuses on the dropdown"
    }
  }
};

export default Dropdown;

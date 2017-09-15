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
  }

  constructor(props) {
    super(props);

    var val = (this.props.value || this.props.defaultValue);
    var lab;
    
    if(this.props.options){
      this.props.options.forEach((v) => {
        if(v.value === val){
          lab = v.label;
        }
      }, this);
    }

    this.state = {
      open: false,
      value: val,
      selectedLabel: lab
    };

    
  }

  setSelectedValue = (selectedOption) => {
    if(selectedOption.value !== this.state.value){
      if(this.props.onChange){
        this.props.onChange(selectedOption);
      }
      this.setState({
        open: false,
        value: selectedOption.value,
        selectedLabel: selectedOption.label,
      });
    }
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
        selectedOptionLabel={this.state.selectedLabel}
        onTargetClick={this.openDropdown}
        onClickOutside={this.closeDropdown}

        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onKeypress={this.props.onKeypress}
      >
        {this.props.options && this.props.options.map(option => (
          <OptionAdapter
            key={option.value}
            label={option.label}
            value={option.value}
            selected={option.value === this.state.value}
            onClick={this.setSelectedValue.bind(this, option)}
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
    value: {
      description: "{string} option that is selected on construction"
    },
    initialSelectedOption: {
      description: "{string} initial selected option"
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

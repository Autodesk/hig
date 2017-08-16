import React from 'react';
import CheckboxAdapter from '../../../adapters/FormElements/CheckboxAdapter';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked === undefined ? false : props.checked
    }
  }
  onCheckboxChange = (event) => {
    this.setState({isChecked: !this.state.isChecked});
    this.resolveChecked();
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  resolveChecked = () => {
    if (this.props.checked === undefined) {
      return this.state.isChecked;
    }
    return this.props.checked;
  };

  render() {
    return (
      <CheckboxAdapter
        checked={this.state.isChecked}
        disabled={this.props.disabled}
        name={this.props.name}
        label={this.props.label}
        required={this.props.required}
        value={this.props.value}
        onChange={this.onCheckboxChange}
        onFocus={this.props.onFocus}
        onHover={this.props.onHover}
      />
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func
};

export default Checkbox;


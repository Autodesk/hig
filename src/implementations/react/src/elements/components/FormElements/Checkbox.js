import React from 'react';
import CheckboxAdapter from '../../../adapters/FormElements/CheckboxAdapter';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    const controlled = props.checked === undefined ? false : true;

    this.state = {
      checked: this.getDefaultChecked(),
      controlled
    }
  }

  getDefaultChecked() {
    const { defaultChecked, checked } = this.props;

    if (checked !== undefined) {
      return checked;
    } else if (defaultChecked !== undefined) {
      return defaultChecked;
    } else {
      return false;
    }
  }

  getRenderedChecked() {
    const { checked } = this.props;

    if (checked !== undefined) {
      return checked;
    } else {
      return this.state.checked;
    }
  }

  handleChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    if (this.state.controlled) {
      if (this.checkboxEl) {
        this.checkboxEl.forceNextReset();
        this.setState({ checked: this.state.checked });
      }
    } else {
      this.setState({ value: event.target.value });
    }
  };

  setCheckboxEl = checkboxEl => {
    this.checkboxEl = checkboxEl;
  };

  render() {
    return (
      <CheckboxAdapter
        ref={this.setCheckboxEl}
        checked={this.getRenderedChecked()}
        disabled={this.props.disabled}
        name={this.props.name}
        label={this.props.label}
        required={this.props.required}
        value={this.props.value}
        onChange={this.handleChange}
        onFocus={this.props.onFocus}
        onHover={this.props.onHover}
      />
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func
};

export default Checkbox;


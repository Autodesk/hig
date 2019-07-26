import { Component } from "react";
import PropTypes from "prop-types";

export default class NumericInputBehaviour extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    step: PropTypes.number,
    value: PropTypes.number,
    initialValue: PropTypes.number,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool
  };

  static defaultProps = {
    step: 1,
    isDisabled: false,
    initialValue: undefined,
    value: undefined,
    onChange: undefined
  };

  constructor(props) {
    super(props);

    // Uncontrolled
    if (props.initialValue !== undefined) {
      this.state = {
        value: props.initialValue
      };
    }
  }

  getNumericValue = () => {
    if (!this.valueIsNumeric()) {
      throw new Error("Can't get numeric value if value is not a number");
    }

    return +this.getValue();
  };

  getValue = () =>
    this.isValueControlled() ? this.props.value : this.state.value;

  setValue = value => {
    this.props.onChange(value);
    if (!this.isValueControlled()) {
      this.setState({ value });
    }
  };

  // eslint-disable-next-line no-restricted-globals
  isNumeric = value => !isNaN(value);

  isValueControlled = () =>
    this.props.value !== undefined && this.props.value !== null;

  updateValue = value => {
    // Do nothing if the input is currently disabled
    if (this.props.isDisabled) {
      return;
    }

    this.setValue(value);
  };

  increment = () => {
    if (this.valueIsNumeric()) {
      this.updateValue(this.getNumericValue() + this.props.step);
    }
  };

  decrement = () => {
    if (this.valueIsNumeric()) {
      this.updateValue(this.getNumericValue() - this.props.step);
    }
  };

  valueIsNumeric = () => this.isNumeric(this.getValue());

  render = () =>
    this.props.children({
      increment: this.increment,
      decrement: this.decrement,
      value: `${this.getValue()}`,
      setValue: this.setValue
    });
}

import { Component } from "react";
import PropTypes from "prop-types";

export default class NumericInputBehaviour extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    step: PropTypes.number,
    value: PropTypes.number,
    initialValue: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    step: 1
  };

  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    // Uncontrolled
    if (props.initialValue !== undefined) {
      this.state = {
        value: props.initialValue
      };
    }
  }

  getValue() {
    return this.isValueControlled() ? this.props.value : this.state.value;
  }

  isValueControlled() {
    return this.props.value !== undefined;
  }

  updateValue(value) {
    this.props.onChange(value);
    if (!this.isValueControlled()) {
      this.setState({ value });
    }
  }

  increment() {
    this.updateValue(this.getValue() + this.props.step);
  }

  decrement() {
    this.updateValue(this.getValue() - this.props.step);
  }

  render() {
    return this.props.children({
      increment: this.increment,
      decrement: this.decrement,
      value: this.getValue()
    });
  }
}

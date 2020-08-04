import { Component } from "react";
import PropTypes from "prop-types";

export default class SpinnerBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.number,
    initialValue: PropTypes.number,
    step: PropTypes.number,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    step: 1,
    initialValue: 0,
    value: undefined,
    onChange: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue
    };
  }

  onDirectChange = event => {
    const newValue = event.target.value;
    this.setValue(newValue);
  };

  getValue() {
    if (this.props.value !== undefined && this.props.value !== null) {
      return this.props.value;
    }
    return this.state.value;
  }
  setValue = value => {
    this.props.onChange(value);

    if (!this.isValueControlled()) {
      this.setState({ value });
    }
  };

  updateValue = value => {
    // Do nothing if the input is currently disabled
    if (this.props.disabled) {
      return;
    }
    this.setValue(value);
  };

  isValueControlled = () =>
    this.props.value !== undefined && this.props.value !== null;

  increment = () => {
    this.updateValue(Number(this.getValue()) + this.props.step);
  };

  decrement = () => {
    this.updateValue(Number(this.getValue()) - this.props.step);
  };

  render() {
    return this.props.children({
      onDirectChange: this.onDirectChange,
      increment: this.increment,
      decrement: this.decrement,
      value: this.getValue()
    });
  }
}

import { Component } from "react";
import PropTypes from "prop-types";

export default class SpinnerBehavior extends Component {
  static propTypes = {
    onClick: PropTypes.func,
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
    onChange: undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue
    };
  }

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
    const { onClick: handleClick } = this.props;
    const { handleChange } = this;

    return this.props.children({
      handleClick,
      handleChange,
      increment: this.increment,
      decrement: this.decrement,
      value: this.getValue(),
      setValue: this.setValue
    });
  }
}

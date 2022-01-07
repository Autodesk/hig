import { Component } from "react";
import PropTypes from "prop-types";

export default class SpinnerBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onChange: PropTypes.func,
    onMouseLeave: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
      isNegative: false,
      value: props.initialValue
    };

    this.timer = null;
    this.timerSet = false;
    this.inputRef = null;
  }

  onDirectChange = event => {
    // const newValue = event.target.value;
    // this.setValue(newValue);

    // console.log('onchange');
    // console.log(event.target.value);
    const newValue = event.target.value === '' ? event.target.value : event.target.valueAsNumber;
    // console.log(newValue);
    if (this.state.isNegative && newValue >= 0) {
      console.log('use neg');
      this.setValue(newValue * -1);
      return;
    }
    this.setValue(newValue);
  };

  handleNegativeNumbers = event => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }

    if (event.keyCode === 189) {
      console.log('negative');
      this.setState({isNegative: true});
    }

    if (event.keyCode === 8) {
      console.log('backspace');
      this.setState({isNegative: false});
    }

    console.log('onkeydown');
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

  setInputRef = element => {
    this.inputRef = element;
  };

  updateValue = value => {
    // Do nothing if the input is currently disabled
    if (this.props.disabled) {
      return;
    }
    this.setValue(value);
    this.inputRef.focus();
  };

  isValueControlled = () =>
    this.props.value !== undefined && this.props.value !== null;

  getFixedValue = (value, stepLength) => Number(value.toFixed(stepLength));

  calculateStepValues = operation => {
    const stepLength = String(this.props.step).split(".")[1].length;
    const stepMultiplier = 10 ** stepLength;
    const convertedValue = Number(this.getValue()) * stepMultiplier;
    const convertedStep = this.props.step * stepMultiplier;
    let convertedOperation = 0;
    let updatedValue = 0;
    if (operation === "increment") {
      convertedOperation = convertedValue + convertedStep;
    } else {
      convertedOperation = convertedValue - convertedStep;
    }
    convertedOperation /= stepMultiplier;
    updatedValue = this.getFixedValue(convertedOperation, stepLength);
    return updatedValue === 0 ? 0 : updatedValue;
  };

  increment = () => {
    this.updateValue(this.calculateStepValues("increment"));
  };

  decrement = () => {
    this.updateValue(this.calculateStepValues("decrement"));
  };

  mouseDownIncrement = () => {
    if (!this.timerSet) {
      this.timer = setInterval(() => {
        this.increment();
      }, 150);
      this.timerSet = true;
    }
  };

  mouseDownDecrement = () => {
    if (!this.timerSet) {
      this.timer = setInterval(() => {
        this.decrement();
      }, 150);
      this.timerSet = true;
    }
  };

  clearTimer = () => {
    clearInterval(this.timer);
    this.timerSet = false;
  };

  mouseLeaveClearTimer = event => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
    this.clearTimer();
  };

  render() {
    return this.props.children({
      onDirectChange: this.onDirectChange,
      handleNegativeNumbers: this.handleNegativeNumbers,
      increment: this.increment,
      decrement: this.decrement,
      value: this.getValue(),
      mouseDownDecrement: this.mouseDownDecrement,
      mouseDownIncrement: this.mouseDownIncrement,
      clearTimer: this.clearTimer,
      mouseLeaveClearTimer: this.mouseLeaveClearTimer,
      setInputRef: this.setInputRef
    });
  }
}

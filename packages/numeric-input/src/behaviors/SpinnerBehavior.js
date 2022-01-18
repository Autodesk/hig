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
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number
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
      isNum: true,
      value: props.initialValue
    };

    this.timer = null;
    this.timerSet = false;
    this.inputRef = null;
  }

  onDirectChange = event => {
    const newValue = event.target.value;
    if (this.state.isNum) {
      this.setValue(newValue);
    }
  };

  getValue() {
    if (this.props.value !== undefined && this.props.value !== null) {
      return this.props.value;
    }
    return this.state.value;
  }

  setValue = value => {
    const minMax = this.checkMinMax(value);
    this.props.onChange(minMax);

    if (!this.isValueControlled()) {
      this.setState({ value: minMax });
    }
  };

  setInputRef = element => {
    this.inputRef = element;
  };

  getFixedValue = (value, stepLength) => Number(value.toFixed(stepLength));

  checkMinMax = value => {
    let minMax = value;

    if (minMax < this.props.min) {
      minMax = this.props.min;
    }

    if (minMax > this.props.max) {
      minMax = this.props.max;
    }

    return minMax;
  };

  isValueControlled = () =>
    this.props.value !== undefined && this.props.value !== null;

  updateValue = value => {
    // Do nothing if the input is currently disabled
    if (this.props.disabled) {
      return;
    }
    this.setValue(this.checkMinMax(value));
    this.inputRef.focus();
  };

  handleInputNumber = event => {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      charCode > 31 &&
      (charCode < 48 || charCode > 57) &&
      charCode !== 45 &&
      charCode !== 46
    ) {
      this.setState({
        isNum: false
      });
      return false;
    }
    this.setState({
      isNum: true
    });

    return true;
  };

  handleStepArrowKeys = event => {
    // up arrow
    if (event.keyCode === 38) {
      this.increment();
    }

    // down arrow
    if (event.keyCode === 40) {
      this.decrement();
    }

    return false;
  };

  handleNumericOnly = () => false;

  calculateStepValues = operation => {
    const decimalArray = String(this.props.step).split(".");
    const stepLength =
      decimalArray.length === 1 ? decimalArray.length : decimalArray[1].length;
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
    return updatedValue === 0 ? String(0) : String(updatedValue);
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
      handleStepArrowKeys: this.handleStepArrowKeys,
      handleInputNumber: this.handleInputNumber,
      handleNumericOnly: this.handleNumericOnly,
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

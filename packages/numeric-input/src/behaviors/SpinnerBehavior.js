// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const SpinnerBehavior = (props) => {
  const [valueHook, setValueHook] = useState(props.initialValue);
  const [timerSet, setTimerSet] = useState(false);
  const [timer, setTimer] = useState(null);
  const inputRef = useRef(null);
  const isValueControlled = () =>
    props.value !== undefined && props.value !== null;

  const getValue = () => {
    if (props.value !== undefined && props.value !== null) {
      return props.value;
    }
    return valueHook;
  };

  const setValue = (valueRef) => {
    props.onChange(valueRef);

    if (!isValueControlled()) {
      setValueHook(valueRef);
    }
  };

  const updateValue = (valueRef) => {
    // Do nothing if the input is currently disabled
    if (props.disabled) {
      return;
    }
    setValue(valueRef);
    inputRef.current.focus();
  };

  const increment = () => {
    updateValue(Number(getValue()) + props.step);
  };

  const decrement = () => {
    updateValue(Number(getValue()) - props.step);
  };

  const mouseDownIncrement = () => {
    if (!timerSet) {
      setTimer(
        setInterval(() => {
          increment();
        }, 150)
      );
      setTimerSet(true);
    }
  };

  const mouseDownDecrement = () => {
    if (!timerSet) {
      setTimer(
        setInterval(() => {
          decrement();
        }, 150)
      );
      setTimerSet(true);
    }
  };

  const clearTimer = () => {
    clearInterval(timer);
    setTimerSet(false);
  };

  const mouseLeaveClearTimer = (event) => {
    if (props.onMouseLeave) {
      props.onMouseLeave(event);
    }
    clearTimer();
  };

  const onDirectChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const setInputRef = (element) => {
    inputRef.current = element;
  };

  return props.children({
    onDirectChange,
    increment,
    decrement,
    value: getValue(),
    mouseDownDecrement,
    mouseDownIncrement,
    clearTimer,
    mouseLeaveClearTimer,
    setInputRef,
  });
};

SpinnerBehavior.displayName = "SpinnerBehavior";

SpinnerBehavior.propTypes = {
  children: PropTypes.func,
  onChange: PropTypes.func,
  onMouseLeave: PropTypes.func,
  value: PropTypes.number,
  initialValue: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
};
SpinnerBehavior.defaultProps = {
  step: 1,
  initialValue: 0,
  value: undefined,
  onChange: () => {},
};

export default SpinnerBehavior;

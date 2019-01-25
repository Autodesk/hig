import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./SliderPresenter.stylesheet";

export default class SliderPresenter extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    hasFocus: PropTypes.bool,
    hasHover: PropTypes.bool,
    isPressed: PropTypes.bool,
    id: PropTypes.string,
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const {
      disabled,
      hasFocus,
      hasHover,
      isPressed,
      max,
      min,
      value,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const rangeRange = max - min;
          const valueRatio = (value - min) / rangeRange;

          const styles = stylesheet(valueRatio, resolvedRoles);

          return (
            <input
              className={css(styles.input)}
              disabled={disabled}
              type="range"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              max={max}
              min={min}
              value={value}
              {...otherProps}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

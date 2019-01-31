import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default class SliderPresenter extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    hasFocus: PropTypes.bool,
    hasHover: PropTypes.bool,
    isPressed: PropTypes.bool,
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

          const styles = stylesheet(
            { disabled, hasFocus, hasHover, isPressed },
            valueRatio,
            resolvedRoles
          );

          return (
            <input
              className={css(styles.slider)}
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

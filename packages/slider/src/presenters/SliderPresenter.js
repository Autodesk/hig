import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";
import { AVAILABLE_SLIDER_TYPES, sliderTypes } from "../constants";

export default class SliderPresenter extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    hasFocus: PropTypes.bool,
    hasHover: PropTypes.bool,
    isPressed: PropTypes.bool,
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(AVAILABLE_SLIDER_TYPES)
  };

  getTickMarks = (min, max, step, styles) => {
    const loops = step ? Math.floor((max - min) / step) : 1;
    const tickMarks = [];
    for (let i = 0; i < loops; i += 1) {
      tickMarks.push(
        <div
          className={css(styles.markRules)}
          style={{ left: `${(i * 100) / loops}%` }}
          key={`mark-${i}`}
        />
      );
    }
    // adds the mark to end of slider
    tickMarks.push(
      <div
        className={css(styles.markRules)}
        style={{ right: "0%" }}
        key={`mark-${loops}`}
      />
    );
    return tickMarks;
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
      variant,
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

          const marks =
            variant === sliderTypes.DISCRETE
              ? this.getTickMarks(min, max, otherProps.step, styles)
              : null;

          return marks ? (
            <div className={css(styles.discrete)}>
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
              <div className={css(styles.markContainer)}>{marks}</div>
            </div>
          ) : (
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

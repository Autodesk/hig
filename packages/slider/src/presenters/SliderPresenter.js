import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { AVAILABLE_SLIDER_TYPES, sliderTypes } from "../constants";

const SliderPresenter = (props) => {
  const {
    disabled,
    hasFocus,
    hasHover,
    isPressed,
    max,
    min,
    sliderRef,
    stylesheet: customStylesheet,
    value,
    variant,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const sliderClassName = createCustomClassNames(className, "slider");
  const markContainerClassName = createCustomClassNames(
    className,
    "slider-mark-container"
  );

  const getTickMarks = (step, styles) => {
    const markRulesClassName = createCustomClassNames(
      props.className,
      "slider-mark-rules"
    );
    const loops = step ? Math.floor((max - min) / step) : 1;
    const tickMarks = [];
    for (let i = 0; i < loops; i += 1) {
      tickMarks.push(
        <div
          className={cx([markRulesClassName, css(styles.markRules)])}
          style={{ left: `${(i * 100) / loops}%` }}
          key={`mark-${i}`}
        />
      );
    }
    // adds the mark to end of slider
    tickMarks.push(
      <div
        className={cx([markRulesClassName, css(styles.markRules)])}
        style={{ right: "0%" }}
        key={`mark-${loops}`}
      />
    );
    return tickMarks;
  };

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            disabled,
            hasFocus,
            hasHover,
            isPressed,
            max,
            min,
            stylesheet: customStylesheet,
            value,
          },
          resolvedRoles
        );

        const marks =
          variant === sliderTypes.DISCRETE
            ? getTickMarks(otherProps.step, styles)
            : null;

        return marks ? (
          <div className={cx([className, css(styles.discrete)])}>
            <input
              {...otherProps}
              className={cx([sliderClassName, css(styles.slider)])}
              disabled={disabled}
              type="range"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              max={max}
              min={min}
              ref={sliderRef}
              value={value}
            />
            <div
              className={cx([
                markContainerClassName,
                css(styles.markContainer),
              ])}
            >
              {marks}
            </div>
          </div>
        ) : (
          <input
            {...otherProps}
            className={cx([className, css(styles.slider)])}
            disabled={disabled}
            type="range"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            max={max}
            min={min}
            ref={sliderRef}
            value={value}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
};

SliderPresenter.displayName = "SliderPresenter";

SliderPresenter.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  isPressed: PropTypes.bool,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sliderRef: PropTypes.func,
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stylesheet: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(AVAILABLE_SLIDER_TYPES),
};

export default SliderPresenter;

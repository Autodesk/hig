import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames, generateId } from "@hig/utils";
import stylesheet from "./stylesheet";

const TogglePresenter = (props) => {
  const {
    hasFocus,
    hasHover,
    isPressed,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className, id } = otherProps;
  const inputClassName = createCustomClassNames(className, "input");
  const knobClassName = createCustomClassNames(className, "knob");
  const inputId = id || generateId(`toggleInput`);

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const defaultStyles = stylesheet(props, resolvedRoles);

        const styles = customStylesheet
          ? customStylesheet(defaultStyles, props, resolvedRoles)
          : stylesheet(props, resolvedRoles);

        return (
          <label
            className={cx(css(styles.toggleWrapper), className)}
            htmlFor={inputId}
          >
            <input
              {...otherProps}
              className={cx(css(styles.toggleInput), inputClassName)}
              id={inputId}
              type="checkbox"
            />
            <span className={cx(css(styles.toggleKnob), knobClassName)} />
          </label>
        );
      }}
    </ThemeContext.Consumer>
  );
};

TogglePresenter.displayName = "TogglePresenter";

TogglePresenter.propTypes = {
  /**
   * Returns whether or not the toggle is currently focused
   */
  hasFocus: PropTypes.bool,
  /**
   * Returns whether or not the toggle is currently hovered
   */
  hasHover: PropTypes.bool,
  /**
   * Returns whether or not the toggle is currently pressed
   */
  isPressed: PropTypes.bool,
  /**
   *  Function to modify the component's styles
   */
  stylesheet: PropTypes.func,
};

export default TogglePresenter;

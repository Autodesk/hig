import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";
import CheckPresenter from "./CheckPresenter";
import stylesheet from "./stylesheet";

const CheckboxPresenter = props => {
  const {
    checkboxRef,
    checked,
    disabled,
    hasFocus,
    hasHover,
    indeterminate,
    isPressed,
    onBlur,
    onChange,
    onClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    onFocus,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const checkboxInputClassName = createCustomClassNames(
    className,
    "checkbox-input"
  );

  const setIndeterminate = input => {
    if (input) {
      // Workaround for https://github.com/facebook/react/issues/1798
      // eslint-disable-next-line no-param-reassign
      input.indeterminate = props.indeterminate;
    }

    if (props.checkboxRef) {
      props.checkboxRef(input);
    }
  };

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            checked,
            disabled,
            hasFocus,
            hasHover,
            indeterminate,
            isPressed,
            stylesheet: customStylesheet
          },
          resolvedRoles
        );

        return (
          <div className={cx([className, css(styles.checkboxWrapper)])}>
            <input
              {...otherProps}
              checked={checked}
              className={cx([
                checkboxInputClassName,
                css(styles.checkboxInput)
              ])}
              disabled={disabled}
              onBlur={onBlur}
              onChange={onChange}
              onClick={onClick}
              onFocus={onFocus}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              ref={setIndeterminate}
              type="checkbox"
            />
            <CheckPresenter
              checked={checked}
              disabled={disabled}
              hasFocus={hasFocus}
              hasHover={hasHover}
              indeterminate={indeterminate}
              isPressed={isPressed}
              stylesheet={customStylesheet}
              {...otherProps}
            />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

CheckboxPresenter.propTypes = {
  _checkboxRef: PropTypes.func,
  get checkboxRef() {
    return this._checkboxRef;
  },
  set checkboxRef(value) {
    this._checkboxRef = value;
  },
  /**
   * Checks the checkbox
   */
  checked: PropTypes.bool,
  /**
   * Prevents user actions on the checkbox
   */
  disabled: PropTypes.bool,
  /**
   * Returns whether or not the checkbox is currently focused
   */
  hasFocus: PropTypes.bool,
  /**
   * Returns whether or not the checkbox is currently hovered
   */
  hasHover: PropTypes.bool,
  /**
   * Sets indeterminate state for checkbox
   */
  indeterminate: PropTypes.bool,
  /**
   * Returns whether or not the checkbox is currently pressed
   */
  isPressed: PropTypes.bool,
  /**
   * The name of the checkbox as submitted with a form
   */
  name: PropTypes.string,
  /**
   * Called when user moves focus from the field
   */
  onBlur: PropTypes.func,
  /**
   * Called when the checkbox is changed
   */
  onChange: PropTypes.func,
  /**
   * Called when user clicks on the checkbox
   */
  onClick: PropTypes.func,
  /**
   * Called when user puts focus on the field
   */
  onFocus: PropTypes.func,
  /**
   * Triggers when the user's mouse is pressed over the checkbox
   */
  onMouseDown: PropTypes.func,
  /**
   * Triggers when the user's mouse is over the checkbox
   */
  onMouseEnter: PropTypes.func,
  /**
   * Triggers when the user's mouse is no longer over the checkbox
   */
  onMouseLeave: PropTypes.func,
  /**
   * Triggers when the user's mouse is no longer pressed over the checkbox
   */
  onMouseUp: PropTypes.func,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Value submitted with a form if checked
   */
  value: PropTypes.string
};

CheckboxPresenter.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  name: "checkbox",
  value: "value"
};

export default CheckboxPresenter;

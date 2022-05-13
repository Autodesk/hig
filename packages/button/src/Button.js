import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import {
  availableTargets,
  availableTypes,
  availableWidths,
  types,
  widths,
} from "./constants";

import ButtonPresenter from "./presenters/ButtonPresenter";

const Button = (props) => {
  const {
    disabled,
    icon,
    link,
    onBlur,
    onClick,
    onFocus,
    onHover,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    stylesheet,
    target,
    title,
    type,
    width,
    ...otherProps
  } = props;

  return (
    <ControlBehavior
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {({
        hasFocus,
        hasHover,
        isPressed,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
      }) => (
        <ButtonPresenter
          disabled={disabled}
          hasFocus={hasFocus}
          hasHover={hasHover}
          isPressed={isPressed}
          icon={icon}
          link={link}
          onBlur={handleBlur}
          onClick={onClick}
          onFocus={handleFocus}
          onHover={onHover}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          stylesheet={stylesheet}
          target={target}
          title={title}
          type={type}
          width={width}
          {...otherProps}
        />
      )}
    </ControlBehavior>
  );
};

Button.displayName = "Button";

Button.defaultProps = {
  disabled: false,
  type: types.SOLID,
  width: widths.SHRINK,
};

Button.propTypes = {
  /**
   * Prevents user interaction with the button
   */
  disabled: PropTypes.bool,
  /**
   * A @hig/icon element
   */
  icon: PropTypes.node,
  /**
   * Sets the link of a button
   */
  link: PropTypes.string,
  /**
   * Triggers blur when focus is moved away from icon
   */
  onBlur: PropTypes.func,
  /**
   * Triggers when you click the button
   */
  onClick: PropTypes.func,
  /**
   * Triggers when focus is moved to button
   */
  onFocus: PropTypes.func,
  /**
   * Triggers when you hover over the button
   */
  onHover: PropTypes.func,
  /**
   * Triggers when the user's mouse is pressed over the button
   */
  onMouseDown: PropTypes.func,
  /**
   * Triggers when the user's mouse is over the button
   */
  onMouseEnter: PropTypes.func,
  /**
   * Triggers when the user's mouse is no longer over the button
   */
  onMouseLeave: PropTypes.func,
  /**
   * Triggers when the user's mouse is no longer pressed over the button
   */
  onMouseUp: PropTypes.func,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Specifies where to display the linked URL
   */
  target: PropTypes.oneOf(availableTargets),
  /**
   * Sets the title of a button
   */
  title: PropTypes.string.isRequired,
  /**
   * Specifies type of button
   */
  type: PropTypes.oneOf(availableTypes),
  /**
   * Specifies width of button
   */
  width: PropTypes.oneOf(availableWidths),
};

export default Button;

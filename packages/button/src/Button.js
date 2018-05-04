import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import {
  availableSizes,
  availableTargets,
  availableTypes,
  availableWidths
} from "./constants";

import "./button.scss";

export default class Button extends Component {
  static propTypes = {
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
     * Specifies size of button
     */
    size: PropTypes.oneOf(availableSizes),
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
    width: PropTypes.oneOf(availableWidths)
  };

  static defaultProps = {
    disabled: false,
    size: "standard",
    type: "primary",
    width: "shrink"
  };

  render() {
    const {
      disabled,
      icon,
      link,
      onBlur,
      onClick,
      onFocus,
      onHover,
      size,
      target,
      title,
      type,
      width
    } = this.props;

    const linkProps = link
      ? {
          tabIndex: disabled ? "-1" : "0",
          href: link,
          target
        }
      : {};

    const Element = link ? "a" : "button";

    const buttonClasses = themeClass =>
      cx(themeClass, "hig__button-v1", {
        "hig__button-v1--disabled": disabled,
        [`hig__button-v1--size-${size}`]: size,
        [`hig__button-v1--type-${type}`]: type,
        [`hig__button-v1--width-${width}`]: width
      });

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <Element
            className={buttonClasses(themeClass)}
            {...linkProps}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            onMouseOver={onHover}
          >
            {icon && (
              <div className={cx(themeClass, "hig__button-v1__icon")}>
                {icon}
              </div>
            )}

            <span className={cx("hig__button__title")}>{title}</span>
          </Element>
        )}
      </ThemeContext.Consumer>
    );
  }
}

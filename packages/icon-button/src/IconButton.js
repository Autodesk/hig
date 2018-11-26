import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { types, AVAILABLE_TYPES } from "./types";
import "./icon-button.scss";

export default class IconButton extends Component {
  static propTypes = {
    /**
     * Prevents user actions on the button
     */
    disabled: PropTypes.bool,
    /**
     * Icon or svg to be rendered
     */
    icon: PropTypes.element,
    /**
     * Url button will navigate to when clicked
     */
    link: PropTypes.string,
    /**
     * Deprecated; use `icon` instead
     */
    name: PropTypes.oneOf([]),
    /**
     * Called when user moves focus away from the button
     */
    onBlur: PropTypes.func,
    /**
     * Called when user clicks the button
     */
    onClick: PropTypes.func,
    /**
     * Called when user moves focus onto the button
     */
    onFocus: PropTypes.func,
    /**
     * Called when mouse begins to move over the button
     */
    onMouseEnter: PropTypes.func,
    /**
     * Called when mouse stops moving over the button
     */
    onMouseLeave: PropTypes.func,
    /**
     * Deprecated; use `icon` instead
     */
    svg: PropTypes.string,
    /**
     * Title of the button for accessibility purposes
     */
    title: PropTypes.string.isRequired,
    /**
     * 'primary' or 'flat'; the style of the button
     */
    type: PropTypes.oneOf(AVAILABLE_TYPES)
  };

  static defaultProps = {
    type: types.PRIMARY
  };

  render() {
    const {
      disabled,
      link,
      onClick,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      title
    } = this.props;

    const iconButtonClasses = cx(
      "hig__icon-button",
      `hig__icon-button--${this.props.type}`,
      { "hig__icon-button--disabled": this.props.disabled }
    );

    const linkProps = link
      ? {
          tabIndex: disabled ? "-1" : "0",
          href: link
        }
      : {};

    const props = {
      className: iconButtonClasses,
      ...linkProps,
      onClick,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      title
    };

    const Element = this.props.link ? "a" : "button";

    return (
      <Element {...props}>
        <span className="hig__icon-button__icon">{this.props.icon}</span>
      </Element>
    );
  }
}

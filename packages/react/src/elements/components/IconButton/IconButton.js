/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./icon-button.scss";
import Icon from "../Icon/Icon";

const AvailableTypes = ["primary", "flat", "transparent"];

export default class IconButton extends Component {
  setTabIndex = buttonState => (buttonState ? -1 : 0);

  render() {
    const iconButtonClasses = cx(
      "hig__icon-button",
      `hig__icon-button--${this.props.type}`,
      { "hig__icon-button--disabled": this.props.disabled }
    );
    return (
      <a
        tabIndex={this.setTabIndex(this.props.disabled)}
        className={iconButtonClasses}
        title={this.props.title}
        href={this.props.link}
        onClick={this.props.onClick}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onMouseEnter={this.props.onHover}
      >
        <div className="hig__icon-button__icon">
          <Icon nameOrSVG={this.props.icon} />
        </div>
      </a>
    );
  }
}
IconButton.defaultProps = {
  type: AvailableTypes[0],
  link: null,
  title: "button"
};

IconButton.propTypes = {
  /**
   * Title of the button for accessibility purposes
   */
  title: PropTypes.string.isRequired,
  /**
   * Url button will navigate to when clicked
   */
  link: PropTypes.string,
  /**
   * Name of an included icon, or svg string of a custom icon
   */
  icon: PropTypes.string.isRequired,
  /**
   * Prevents user actions on the button
   */
  disabled: PropTypes.bool,
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
   * Called when user moves the mouse over the button
   */
  onHover: PropTypes.func,
  /**
   * 'primary' or 'flat'; the style of the button
   */
  type: PropTypes.oneOf(AvailableTypes)
};

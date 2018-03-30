/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./icon-button.scss";
import Icon from "../Icon/Icon";

const types = Object.freeze({
  PRIMARY: "primary",
  FLAT: "flat",
  TRANSPARENT: "transparent"
});

const availableTypes = Object.values(types);

export default class IconButton extends Component {
  getTabIndex() {
    return this.props.disabled ? "-1" : "0";
  }

  render() {
    const iconButtonClasses = cx(
      "hig__icon-button",
      `hig__icon-button--${this.props.type}`,
      { "hig__icon-button--disabled": this.props.disabled }
    );

    const props = {
      tabIndex: this.getTabIndex(),
      className: iconButtonClasses,
      title: this.props.title,
      onClick: this.props.onClick,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
      onMouseEnter: this.props.onMouseEnter
    };

    return this.props.link ? (
      <a {...props} href={this.props.link}>
        <span className="hig__icon-button__icon">
          <Icon
            svg={this.props.svg}
            name={this.props.name}
            nameOrSVG={this.props.icon}
          />
        </span>
      </a>
    ) : (
      <button {...props}>
        <Icon
          svg={this.props.svg}
          name={this.props.name}
          nameOrSVG={this.props.icon}
        />
      </button>
    );
  }
}

IconButton.types = types;

IconButton.defaultProps = {
  type: types.PRIMARY,
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
   * Name of the icon to be used
   */
  name: PropTypes.oneOf(Icon.AVAILABLE_NAMES),
  /**
   * SVG markup used for the icon
   */
  svg: PropTypes.string,
  /**
   * Deprecated; use `name` or `svg` instead
   */
  icon: PropTypes.string,
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
  type: PropTypes.oneOf(availableTypes)
};

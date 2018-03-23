/* eslint-disable jsx-a11y/no-static-element-interactions
*/

import React, { Component } from "react";
import PropTypes from "prop-types";

import IconButton from "../IconButton/IconButton";

const COMPONENT_CLASS = "hig__shortcut";

export default class Shortcut extends Component {
  render() {
    return (
      <div className={`${COMPONENT_CLASS}`} title={this.props.title}>
        <IconButton
          type="transparent"
          icon={this.props.icon}
          onClick={this.props.onClick}
          link={this.props.link}
        />
      </div>
    );
  }
}

Shortcut.propTypes = {
  /**
   * Link that the shortcut will navigate to
   */
  link: PropTypes.string,
  /**
   * Title attribute for shortcut
   */
  title: PropTypes.string,
  /**
   * Callback function for when shortcut is clicked
   */
  onClick: PropTypes.func,
  /**
   * Name of icon used in Shortcut
   */
  icon: PropTypes.string
};

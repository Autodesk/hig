import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Menu.scss";

export default class Menu extends Component {
  static propTypes = {
    /**
     * Rendered options
     */
    children: PropTypes.node
  };

  render() {
    return <div className="hig__dropdown-v1__menu">{this.props.children}</div>;
  }
}

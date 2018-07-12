import React, { Component } from "react";
import PropTypes from "prop-types";

import "./MenuPresenter.scss";

export default class MenuPresenter extends Component {
  static propTypes = {
    /**
     * Options
     */
    children: PropTypes.node
  };

  render() {
    return <div className="hig__dropdown-v1__menu">{this.props.children}</div>;
  }
}

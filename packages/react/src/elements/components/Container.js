import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Container extends Component {
  render() {
    return <div className="hig__container">{this.props.children}</div>;
  }
}

Container.propTypes = {
  /**
   * React-generated markup to render within
   */
  children: PropTypes.node
};

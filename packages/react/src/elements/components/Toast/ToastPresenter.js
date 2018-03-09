import React, { Component } from "react";
import PropTypes from "prop-types";
import "./toast.css";

export default class ToastPresenter extends Component {
  render() {
    return <div className="hig__toast">{this.props.children}</div>;
  }
}

ToastPresenter.propTypes = {
  /**
   * Content for the Toast
   */
  children: PropTypes.node
};

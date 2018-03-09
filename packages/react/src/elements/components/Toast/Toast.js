import React, { Component } from "react";
import PropTypes from "prop-types";
import ToastPresenter from "./ToastPresenter";

export default class Toast extends Component {
  render() {
    const { children, ...otherProps } = this.props;
    return <ToastPresenter {...otherProps}>{children}</ToastPresenter>;
  }
}

Toast.propTypes = {
  /**
   * Content for the Toast
   */
  children: PropTypes.node
};

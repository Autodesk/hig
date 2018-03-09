import React, { Component } from "react";
import PropTypes from "prop-types";
import ToastPresenter from "./ToastPresenter";

export default class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <ToastPresenter
        {...otherProps}
        onDismiss={this.onDismiss}
        visible={this.state.visible}
      >
        {children}
      </ToastPresenter>
    );
  }
}

Toast.propTypes = {
  /**
   * Content for the Toast
   */
  children: PropTypes.node
};

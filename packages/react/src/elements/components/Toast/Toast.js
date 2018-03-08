import React, { Component } from "react";
import ToastPresenter from "./ToastPresenter";

export default class Toast extends Component {
  render() {
    return <ToastPresenter>{this.props.children}</ToastPresenter>;
  }
}

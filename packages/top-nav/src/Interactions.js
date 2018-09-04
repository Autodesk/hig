import React, { Component } from "react";
import PropTypes from "prop-types";

import InteractionsPresenter from "./presenters/InteractionsPresenter";

export default class Interactions extends Component {
  static propTypes = {
    /** Actions to be rendered */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  };

  /**
   * @todo Complete render prop implementation with alignment helpers
   */
  renderChildren() {
    const { children } = this.props;

    if (typeof children === "function") {
      return children();
    }

    return children;
  }

  render() {
    return (
      <InteractionsPresenter>{this.renderChildren()}</InteractionsPresenter>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

import InteractionsPresenter from "./presenters/InteractionsPresenter";

export default class Interactions extends Component {
  static propTypes = {
    /** Actions to be rendered */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func
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
    const { stylesheet } = this.props;

    return (
      <InteractionsPresenter stylesheet={stylesheet}>
        {this.renderChildren()}
      </InteractionsPresenter>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

import { ContainerView as ContainerViewVanilla } from "hig-vanilla";

export default class ContainerViewAdapter extends Component {
  render() {
    return (
      <div className={ContainerViewVanilla.className}>
        {this.props.children}
      </div>
    );
  }
}

ContainerViewAdapter.propTypes = {
  /**
   * The content insdie of the content View
   */
  children: PropTypes.node
};

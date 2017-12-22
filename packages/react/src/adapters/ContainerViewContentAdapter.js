import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerViewContent as ContainerViewContentVanilla } from "hig-vanilla";

export default class ContainerViewContentAdapter extends Component {
  render() {
    return (
      <div className={ContainerViewContentVanilla.className}>
        {this.props.children}
      </div>
    );
  }
}

ContainerViewContentAdapter.propTypes = {
  /**
   * The content inside of the content View
   */
  children: PropTypes.node
};

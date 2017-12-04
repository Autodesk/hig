import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerViewContent as ContainerViewContentVanilla } from "hig-vanilla";

class ContainerViewContentAdapter extends Component {
  render() {
    return (
      <div className={ContainerViewContentVanilla.className}>
        {this.props.children}
      </div>
    );
  }
}

ContainerViewContentAdapter.propTypes = {
  children: PropTypes.node
};

ContainerViewContentAdapter.__docgenInfo = {
  props: {
    children: {
      description: "the content insdie of the content View"
    }
  }
};
export default ContainerViewContentAdapter;

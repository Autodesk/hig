import React, { Component } from "react";
import PropTypes from "prop-types";

import { ContainerView as ContainerViewVanilla } from "hig-vanilla";

class ContainerViewAdapter extends Component {
  render() {
    return (
      <div className={ContainerViewVanilla.className}>
        {this.props.children}
      </div>
    );
  }
}

ContainerViewAdapter.propTypes = {
  children: PropTypes.node
};

ContainerViewAdapter.__docgenInfo = {
  props: {
    children: {
      description: "the content insdie of the content View"
    }
  }
};

export default ContainerViewAdapter;

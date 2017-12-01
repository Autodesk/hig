import React, { Component } from "react";

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

export default ContainerViewContentAdapter;

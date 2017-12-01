import React, { Component } from "react";

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

export default ContainerViewAdapter;

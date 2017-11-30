import React, { Component } from "react";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

class ActionBarAdapter extends Component {
  render() {
    return (
      <div className={VanillaActionBar.className}>{this.props.children}</div>
    );
  }
}

export default ActionBarAdapter;

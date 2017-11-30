import React, { Component } from "react";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

class ActionBarSpacerAdapter extends Component {
  render() {
    return <div className={VanillaActionBar.spacerClassName} />;
  }
}

ActionBarSpacerAdapter.propTypes = {};

export default ActionBarSpacerAdapter;

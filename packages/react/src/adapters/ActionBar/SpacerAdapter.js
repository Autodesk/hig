import React, { Component } from "react";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

class SpacerAdapter extends Component {
  render() {
    return <div className={VanillaActionBar.spacerClassName} />;
  }
}

SpacerAdapter.propTypes = {};

export default SpacerAdapter;

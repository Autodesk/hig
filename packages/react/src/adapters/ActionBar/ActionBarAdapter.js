import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActionBar as VanillaActionBar } from "hig-vanilla";
import ActionBarGroupAdapter from "./ActionBarGroupAdapter";
import ActionBarSpacerAdapter from "./ActionBarSpacerAdapter";

class ActionBarAdapter extends Component {
  render() {
    return (
      <div className={VanillaActionBar.className}>{this.props.children}</div>
    );
  }
}

ActionBarAdapter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(ActionBarGroupAdapter),
    PropTypes.instanceOf(ActionBarSpacerAdapter)
  ])
};

ActionBarAdapter.__docgenInfo = {
  props: {
    children: {
      description:
        "{ ActionBarGroup or ActionBarSpacer } content for the ActionBar"
    }
  }
};

ActionBarAdapter.defaultProps = {
  children: null
};

export default ActionBarAdapter;

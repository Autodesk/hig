import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

class ActionBarAdapter extends Component {
  render() {
    return (
      <div className={VanillaActionBar.className}>{this.props.children}</div>
    );
  }
}

ActionBarAdapter.propTypes = {
  children: PropTypes.node
};

ActionBarAdapter.__docgenInfo = {
  props: {
    children: {
      description:
        "Content for the ActionBar. Typically ActionBarGroup or ActionBarSpacer"
    }
  }
};

ActionBarAdapter.defaultProps = {
  children: null
};

export default ActionBarAdapter;

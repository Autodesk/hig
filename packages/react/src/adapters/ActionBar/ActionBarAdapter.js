import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

export default class ActionBarAdapter extends Component {
  render() {
    return (
      <div className={VanillaActionBar.className}>{this.props.children}</div>
    );
  }
}

ActionBarAdapter.propTypes = {
  /**
   * Content for the ActionBar. Typically ActionBarGroup or ActionBarSpacer
   */
  children: PropTypes.node
};

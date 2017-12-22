import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

export default class ActionBarGroupAdapter extends Component {
  render() {
    return (
      <div className={VanillaActionBar.groupClassName}>
        {this.props.children}
      </div>
    );
  }
}

ActionBarGroupAdapter.propTypes = {
  /**
   * Content of the ActionBarGroup. Typically flat IconButtons.
   */
  children: PropTypes.node
};

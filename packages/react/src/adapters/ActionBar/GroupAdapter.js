import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

class GroupAdapter extends Component {
  render() {
    return (
      <div className={VanillaActionBar.groupClassName}>
        {this.props.children}
      </div>
    );
  }
}

GroupAdapter.propTypes = {
  children: PropTypes.node
};

export default GroupAdapter;

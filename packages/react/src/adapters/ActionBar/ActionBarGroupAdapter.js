import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActionBar as VanillaActionBar } from "hig-vanilla";

class ActionBarGroupAdapter extends Component {
  render() {
    return (
      <div className={VanillaActionBar.groupClassName}>
        {this.props.children}
      </div>
    );
  }
}

ActionBarGroupAdapter.propTypes = {
  children: PropTypes.node
};

ActionBarGroupAdapter.__docgenInfo = {
  props: {
    children: {
      description: "Content of the ActionBarGroup. Typically flat IconButtons."
    }
  }
};

export default ActionBarGroupAdapter;

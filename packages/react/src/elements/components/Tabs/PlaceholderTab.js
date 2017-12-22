import React from "react";
import PropTypes from "prop-types";

export default class PlaceholderTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabId: undefined
    };
  }

  render() {
    return null;
  }
}

PlaceholderTab.propTypes = {
  /**
   * Brief text identifying the tab content
   */
  label: PropTypes.string.isRequired,
  /**
   * When true, tabs content will be shown
   */
  active: PropTypes.bool,
  /**
   * Content to display when tab is active
   */
  children: PropTypes.node.isRequired
};

PlaceholderTab.defaultProps = {
  active: false
};

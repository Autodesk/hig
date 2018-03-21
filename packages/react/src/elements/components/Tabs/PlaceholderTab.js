import React from "react";
import PropTypes from "prop-types";

export default class PlaceholderTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabId: undefined,
      active: props.active
    };
  }

  render() {
    return null;
  }
}

PlaceholderTab.propTypes = {
  /**
   * When true, tabs content will be shown
   */
  active: PropTypes.bool
};

PlaceholderTab.defaultProps = {
  active: false
};

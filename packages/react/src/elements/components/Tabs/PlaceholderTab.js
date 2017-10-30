import React from "react";
import PropTypes from "prop-types";

class Tab extends React.Component {
  state = {
    activeTabId: undefined
  };

  render() {
    return null;
  }
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Tab.defaultProps = {
  active: false
};

Tab.__docgenInfo = {
  props: {
    label: { description: "brief text identifying the tab content" },
    active: { description: "when true, tabs content will be shown" },
    children: { description: "content to display when tab is active" }
  }
};

export default Tab;

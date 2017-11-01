import React from "react";
import PropTypes from "prop-types";
import TabAdapter from "../../../adapters/Tabs/TabAdapter";

class Tab extends React.Component {
  handleClick = () => {
    this.props.activateTab(this.props.index);
  };

  render() {
    return <TabAdapter onClick={this.handleClick} {...this.props} />;
  }
}

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  activateTab: PropTypes.func.isRequired
};

export default Tab;

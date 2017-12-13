import React, { Component } from "react";
import PropTypes from "prop-types";
import { ExpandingFilterSection as VanillaExpandingFilterSection } from "hig-vanilla";
import ExpandingFilterSectionAdapter from "../../adapters/ExpandingFilterSectionAdapter";

class ExpandingFilterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleExpanded = event => {
    event.preventDefault();
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <ExpandingFilterSectionAdapter
        {...this.props}
        onClick={this.toggleExpanded}
        open={this.state.expanded}
      />
    );
  }
}

ExpandingFilterSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  size: PropTypes.oneOf(VanillaExpandingFilterSection.AvailableSizes)
};

ExpandingFilterSection.__docgenInfo = {
  props: {
    children: {
      description: "Content to be shown when section is open"
    },
    label: {
      description: "Short text describing the content"
    },
    size: {
      description: "{s, m} size of the expanding fitler section label"
    }
  }
};

export default ExpandingFilterSection;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { ExpandingFilterSection as VanillaExpandingFilterSection } from "hig-vanilla";
import ExpandingFilterSectionAdapter from "../../adapters/ExpandingFilterSectionAdapter";

export default class ExpandingFilterSection extends Component {
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
  /**
   * Content to be shown when section is open
   */
  children: PropTypes.node,
  /**
   * Short text describing the content
   */
  label: PropTypes.string,
  /**
   * {s, m} size of the expanding filter section label
   */
  size: PropTypes.oneOf(VanillaExpandingFilterSection.AvailableSizes)
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid as VanillaGrid } from "hig-vanilla";
import HIGAdapter, { MountsHIGChildList } from "./HIGAdapter";

export default class GridAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Grid"
        HIGConstructor={VanillaGrid}
      >
        {adapterProps => (
          <MountsHIGChildList {...adapterProps}>
            {this.props.children}
          </MountsHIGChildList>
        )}
      </HIGAdapter>
    );
  }
}

GridAdapter.propTypes = {
  /**
   * Support adding GridItems
   */
  children: PropTypes.node
};

import React, { Component } from "react";
import PropTypes from "prop-types";

import { SkeletonItem as VanillaSkeletonItem } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class SkeletonItemAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        displayName="SkeletonItem"
        HIGConstructor={VanillaSkeletonItem}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.marginBottom}
              setter="setMarginBottom"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.maxWidth}
              setter="setMaxWidth"
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

SkeletonItemAdapter.propTypes = {
  /**
   * Custom margin bottom definition (e.g., "16px")
   */
  marginBottom: PropTypes.string,
  /**
   * Custom max width definition (e.g., "180px")
   */
  maxWidth: PropTypes.string
};

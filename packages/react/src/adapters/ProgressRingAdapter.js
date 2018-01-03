import React, { Component } from "react";
import PropTypes from "prop-types";
import { ProgressRing } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class ProgressRingAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="ProgressRing"
        HIGConstructor={ProgressRing}
      >
        {higProps => (
          <div>
            <MapsPropToMethod
              value={this.props.percentComplete}
              setter="setPercentComplete"
              {...higProps}
            />
            <MapsPropToMethod
              value={this.props.size}
              setter="setSize"
              {...higProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

ProgressRingAdapter.propTypes = {
  /**
   * An integer from 0 to 100 representing the percent the delayed operation has completed
   */
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * {xs, s, m, l} the size of the progress indicator
   */
  size: PropTypes.oneOf(ProgressRing.AvailableSizes)
};

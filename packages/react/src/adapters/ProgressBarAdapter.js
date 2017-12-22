import React, { Component } from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class ProgressBarAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="ProgressBar"
        HIGConstructor={ProgressBar}
      >
        {higProps => (
          <MapsPropToMethod
            value={this.props.percentComplete}
            setter="setPercentComplete"
            {...higProps}
          />
        )}
      </HIGAdapter>
    );
  }
}

ProgressBarAdapter.propTypes = {
  /**
   * An integer from 0 to 100 representing the percent the delayed operation has completed
   */
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Timestamp as VanillaTimestamp } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class TimestampAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        displayName="Timestamp"
        HIGConstructor={VanillaTimestamp}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.time}
              setter="setTimestamp"
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

TimestampAdapter.propTypes = {
  /**
   * {String} string timestamp
   */
  timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
};

import React from "react";
import PropTypes from "prop-types";
import { Timestamp as VanillaTimestamp } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

function TimestampAdapter(props) {
  return (
    <HIGAdapter
      displayName="Timestamp"
      HIGConstructor={VanillaTimestamp}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.time}
            setter="setTimestamp"
            {...adapterProps}
          />
        </div>
      )}
    </HIGAdapter>
  );
}

TimestampAdapter.propTypes = {
  timestamp: PropTypes.number
};

TimestampAdapter.__docgenInfo = {
  props: {
    timestamp: { description: "{Number} Seconds from the Unix epoch" }
  }
};

export default TimestampAdapter;

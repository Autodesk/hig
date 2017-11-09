import React from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

function ProgressBarAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="ProgressBar"
      HIGConstructor={ProgressBar}
    >
      {higProps => (
        <MapsPropToMethod
          value={props.percentComplete}
          setter="setPercentComplete"
          {...higProps}
        />
      )}
    </HIGAdapter>
  );
}

ProgressBarAdapter.propTypes = {
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProgressBarAdapter.__docgenInfo = {
  props: {
    percentComplete: {
      description:
        "An integer from 0 to 100 representing the percent the delayed operation has completed"
    }
  }
};

export default ProgressBarAdapter;

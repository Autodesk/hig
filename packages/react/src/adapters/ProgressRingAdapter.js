import React from "react";
import PropTypes from "prop-types";
import { ProgressRing } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

function ProgressRingAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="ProgressRing"
      HIGConstructor={ProgressRing}
    >
      {higProps => (
        <div>
          <MapsPropToMethod
            value={props.percentComplete}
            setter="setPercentComplete"
            {...higProps}
          />
          <MapsPropToMethod value={props.size} setter="setSize" {...higProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

ProgressRingAdapter.propTypes = {
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(ProgressRing.AvailableSizes)
};

ProgressRingAdapter.defaultProps = {
  percentComplete: undefined,
  size: undefined
};

ProgressRingAdapter.__docgenInfo = {
  props: {
    percentComplete: {
      description:
        "An integer from 0 to 100 representing the percent the delayed operation has completed"
    },
    size: {
      description: "{xs, s, m, l} the size of the progress indicator"
    }
  }
};

export default ProgressRingAdapter;

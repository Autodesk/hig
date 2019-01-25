import React, { Component } from "react";
import PropTypes from "prop-types";

import ProgressRingDeterminateBehavior from "./behaviors/ProgressRingDeterminateBehavior";
import ProgressRingIndeterminateBehavior from "./behaviors/ProgressRingIndeterminateBehavior";
import ProgressRingPresenter from "./presenters/ProgressRingPresenter";
import availableSizes from "./availableSizes";

export default class ProgressRing extends Component {
  static propTypes = {
    /**
     * An integer from 0 to 100 representing the percent the delayed operation has completed.
     * If left blank or this prop is omitted you will have the indeterminate progress ring
     */
    percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * {xs, s, m, l, xl} the size of the progress indicator
     */
    size: PropTypes.oneOf(availableSizes)
  };

  static defaultProps = {
    size: "m"
  };

  render() {
    const { percentComplete, size } = this.props;
    const ProgressRingBehavior =
      percentComplete === undefined
        ? ProgressRingIndeterminateBehavior
        : ProgressRingDeterminateBehavior;
    const behaviorProps =
      percentComplete === undefined ? {} : { percentComplete };

    return (
      <ProgressRingBehavior {...behaviorProps}>
        {({ innerRef, cssTransitionState }) => (
          <ProgressRingPresenter
            innerRef={innerRef}
            percentComplete={percentComplete}
            size={size}
            cssTransitionState={cssTransitionState}
          />
        )}
      </ProgressRingBehavior>
    );
  }
}

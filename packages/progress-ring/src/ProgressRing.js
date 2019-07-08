import React, { Component } from "react";
import PropTypes from "prop-types";

import ProgressRingDeterminateBehavior from "./behaviors/ProgressRingDeterminateBehavior";
import ProgressRingIndeterminateBehavior from "./behaviors/ProgressRingIndeterminateBehavior";
import ProgressRingPresenter from "./presenters/ProgressRingPresenter";
import { availableSizes, availableSurfaces } from "./constants";

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
    size: PropTypes.oneOf(availableSizes),
    /**
     * Specifies the surface level for the background
     */
    surface: PropTypes.oneOf(availableSurfaces),
    /**
     * Specifies a background color
     * If both surface & mask are provided, the value of mask will be used
     */
    mask: PropTypes.string
  };

  static defaultProps = {
    size: "m",
    surface: 100
  };

  render() {
    const { percentComplete, size, surface, mask } = this.props;
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
            surface={surface}
            mask={mask}
          />
        )}
      </ProgressRingBehavior>
    );
  }
}

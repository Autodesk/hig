import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid as VanillaGrid } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MountedByHIGParentList,
  MountsAnyChild
} from "./HIGAdapter";

export default class GridItemAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="GridItem"
        HIGConstructor={VanillaGrid._partials.GridItem}
      >
        {adapterProps => (
          <div>
            <MountedByHIGParentList mounter="addGridItem" {...adapterProps} />
            <MapsPropToMethod
              setter="setFraction"
              value={this.props.fraction}
              {...adapterProps}
            />
            {this.props.children ? (
              <MountsAnyChild mounter="addSlot" {...adapterProps}>
                {this.props.children}
              </MountsAnyChild>
            ) : null}
          </div>
        )}
      </HIGAdapter>
    );
  }
}

GridItemAdapter.propTypes = {
  /**
   * Fraction in english, with 1, 2, 4, 8, 12 as nominators
   * So our possible values are:
   *   'one-whole'
   *   'one-half'
   *   'one-quarter'
   *   'two-quarter'
   *   'three-quarter'
   *   'one-eighth'
   *   'two-eighths'
   *   'three-eighths'
   *   'four-eighths'
   *   'five-eights'
   *   'six-eighths'
   *   'seven-eighths'
   *   'one-twelfth'
   *   'two-twelfths'
   *   'three-twelfths'
   *   'four-twelfths'
   *   'five-twelfths'
   *   'six-twelfths'
   *   'seven-twelfths'
   *   'eight-twelfths'
   *   'nine-twelfths'
   *   'ten-twelfths'
   *   'eleven-twelfths'
   */
  fraction: PropTypes.oneOf(VanillaGrid._partials.GridItem.AvailableFractions)
    .isRequired,
  /**
   * Content for the grid item
   */
  children: PropTypes.node
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerViewRight as ContainerViewRightVanilla } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

export default class ContainerViewRightAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="ContainerViewRight"
        HIGConstructor={ContainerViewRightVanilla}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod value={this.props.open} {...adapterProps}>
              {(instance, value) =>
                value ? instance.open() : instance.close()}
            </MapsPropToMethod>
            <MountsAnyChild mounter="addSlot" {...adapterProps}>
              {this.props.children}
            </MountsAnyChild>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

ContainerViewRightAdapter.propTypes = {
  /**
   * Sets whether container is open
   */
  open: PropTypes.bool,
  /**
   * Content that is inside the container
   */
  children: PropTypes.node
};

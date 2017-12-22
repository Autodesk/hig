import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spacer as VanillaSpacer } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

export default class SpacerAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Spacer"
        HIGConstructor={VanillaSpacer}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.inset}
              setter="setInset"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.type}
              setter="setType"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.width}
              setter="setWidth"
              {...adapterProps}
            />
            <MountsAnyChild mounter="addSlot" {...adapterProps}>
              {this.props.children}
            </MountsAnyChild>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

SpacerAdapter.propTypes = {
  /**
   * Inset width of the spacer
   */
  inset: PropTypes.oneOf(VanillaSpacer.AvailableSizes),
  /**
   * Type of the spacer ('stack' or 'inline')
   */
  type: PropTypes.oneOf(VanillaSpacer.AvailableTypes),
  /**
   * Width of the spacer (vertical if type is 'stack', horizontal if type is 'inline'
   */
  width: PropTypes.oneOf(VanillaSpacer.AvailableSizes),
  /**
   * Content to render within the spacer
   */
  children: PropTypes.node
};

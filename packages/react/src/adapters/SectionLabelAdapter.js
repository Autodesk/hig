import React, { Component } from "react";
import PropTypes from "prop-types";

import { SectionLabel as VanillaSectionLabel } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

export default class SectionLabelAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        displayName="SectionLabel"
        HIGConstructor={VanillaSectionLabel}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.label}
              setter="setLabel"
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

SectionLabelAdapter.propTypes = {
  /**
   * Label text
   */
  label: PropTypes.string.isRequired,
  /**
   * Content inside the container
   */
  children: PropTypes.node
};

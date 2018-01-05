import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon as VanillaIcon } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class IconAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Icon"
        HIGConstructor={VanillaIcon}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              setter="setNameOrSVG"
              value={this.props.nameOrSVG}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setSize"
              value={this.props.size}
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

IconAdapter.propTypes = {
  /**
   * Name of an included icon, or svg string of a custom icon
   */
  nameOrSVG: PropTypes.string.isRequired,
  /**
   * Size of the icon, in pixels
   */
  size: PropTypes.oneOf(VanillaIcon.AvailableSizes)
};

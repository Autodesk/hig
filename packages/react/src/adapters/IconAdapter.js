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
          <MapsPropToMethod
            setter="setNameOrSVG"
            value={this.props.nameOrSVG}
            {...adapterProps}
          />
        )}
      </HIGAdapter>
    );
  }
}

IconAdapter.propTypes = {
  /**
   * Name of an included icon, or svg string of a custom icon
   */
  nameOrSVG: PropTypes.string.isRequired
};

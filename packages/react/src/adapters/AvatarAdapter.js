import React, { Component } from "react";
import PropTypes from "prop-types";
import { Avatar as VanillaAvatar } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class AvatarAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Avatar"
        HIGConstructor={VanillaAvatar}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              setter="setName"
              value={this.props.name}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setSize"
              value={this.props.size}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setImage"
              value={this.props.image}
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

AvatarAdapter.propTypes = {
  /**
   * The name for the avatar
   */
  name: PropTypes.string.isRequired,
  /**
   * small, medium, large or extralarge
   */
  size: PropTypes.oneOf(VanillaAvatar.AvailableSizes).isRequired,
  /**
   * Url to a profile image
   */
  image: PropTypes.string
};

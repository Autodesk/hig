import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconButton as VanillaIconButton } from "hig-vanilla";

import HIGAdapter, { MapsPropToMethod, MapsEventListener } from "./HIGAdapter";

export default class IconButtonAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        displayName="IconButton"
        HIGConstructor={VanillaIconButton}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.title}
              setter="setTitle"
              {...adapterProps}
            />
            <MapsEventListener
              listener="onClick"
              handler={this.props.onClick}
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.link}
              setter="setLink"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.icon}
              setter="setIcon"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.type}
              setter="setType"
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.disabled} {...adapterProps}>
              {(instance, value) =>
                value ? instance.disable() : instance.enable()
              }
            </MapsPropToMethod>

            <MapsEventListener
              listener="onHover"
              handler={this.props.onHover}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onFocus"
              handler={this.props.onFocus}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onBlur"
              handler={this.props.onBlur}
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

IconButtonAdapter.propTypes = {
  /**
   * Title of the button for accessibility purposes
   */
  title: PropTypes.string.isRequired,
  /**
   * Url button will navigate to when clicked
   */
  link: PropTypes.string,
  /**
   * Name of an included icon, or svg string of a custom icon
   */
  icon: PropTypes.string.isRequired,
  /**
   * Prevents user actions on the button
   */
  disabled: PropTypes.bool,
  /**
   * Called when user moves focus away from the button
   */
  onBlur: PropTypes.func,
  /**
   * Called when user clicks the button
   */
  onClick: PropTypes.func,
  /**
   * Called when user moves focus onto the button
   */
  onFocus: PropTypes.func,
  /**
   * Called when user moves the mouse over the button
   */
  onHover: PropTypes.func,
  /**
   * 'primary' or 'flat'; the style of the button
   */
  type: PropTypes.oneOf(VanillaIconButton.AvailableTypes)
};

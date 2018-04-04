import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button as VanillaButton } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MapsEventListener } from "../HIGAdapter";

export default class ButtonAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        displayName="Button"
        HIGConstructor={VanillaButton}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.icon}
              setter="setIcon"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.link}
              setter="setLink"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.target}
              setter="setTarget"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.title}
              setter="setTitle"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.type}
              setter="setType"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.size}
              setter="setSize"
              {...adapterProps}
            />
            <MapsPropToMethod
              value={this.props.width}
              setter="setWidth"
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.disabled} {...adapterProps}>
              {(instance, value) =>
                value ? instance.disable() : instance.enable()
              }
            </MapsPropToMethod>
            <MapsEventListener
              listener="onBlur"
              handler={this.props.onBlur}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onClick"
              handler={this.props.onClick}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onFocus"
              handler={this.props.onFocus}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onHover"
              handler={this.props.onHover}
              {...adapterProps}
            />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

ButtonAdapter.propTypes = {
  /**
   * Prevents user action on the button
   */
  disabled: PropTypes.bool,
  /**
   * Sets the link of a button
   */
  link: PropTypes.string,
  /**
   * Triggers blur when focus is moved away from icon
   */
  onBlur: PropTypes.func,
  /**
   * Triggers when you click the button
   */
  onClick: PropTypes.func,
  /**
   * Triggers when focus is moved to button
   */
  onFocus: PropTypes.func,
  /**
   * Triggers when you hover over the button
   */
  onHover: PropTypes.func,
  /**
   * Specifies size of button
   */
  size: PropTypes.oneOf(VanillaButton.AvailableSizes),
  /**
   * Specifies where to display the linked URL
   */
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  /**
   * Sets the title of a button
   */
  title: PropTypes.string.isRequired,
  /**
   * Specifies type of button
   */
  type: PropTypes.oneOf(VanillaButton.AvailableTypes),
  /**
   * Specifies width of button (grow or shrink)
   */
  width: PropTypes.oneOf(VanillaButton.AvailableWidths),
  /**
   * An icon name or svg string
   */
  icon: PropTypes.string
};

ButtonAdapter.defaultProps = {
  disabled: false
};

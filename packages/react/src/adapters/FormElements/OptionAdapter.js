import React, { Component } from "react";
import PropTypes from "prop-types";
import { Option as VanillaOption } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParentList,
  MountsAnyChild
} from "../HIGAdapter";

export default class OptionAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Option"
        HIGConstructor={VanillaOption}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              value={this.props.value}
              setter="setValue"
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.selected} {...adapterProps}>
              {(instance, value) =>
                value ? instance.select() : instance.deselect()
              }
            </MapsPropToMethod>

            <MapsPropToMethod value={this.props.checked} {...adapterProps}>
              {(instance, value) =>
                value ? instance.check() : instance.uncheck()
              }
            </MapsPropToMethod>
            <MapsPropToMethod value={this.props.focused} {...adapterProps}>
              {(instance, value) =>
                value ? instance.focus() : instance.unfocus()
              }
            </MapsPropToMethod>
            <MapsEventListener
              listener="onHover"
              handler={this.props.onHover}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onClick"
              handler={this.props.onClick}
              {...adapterProps}
            />
            <MountsAnyChild mounter="setLabel" {...adapterProps}>
              {this.props.label}
            </MountsAnyChild>
            <MountedByHIGParentList mounter="addOption" {...adapterProps} />
          </div>
        )}
      </HIGAdapter>
    );
  }
}

OptionAdapter.propTypes = {
  /**
   * Called when user moves mouse over the option
   */
  onHover: PropTypes.func,
  /**
   * Called when the user clicks the option
   */
  onClick: PropTypes.func,
  /**
   * Text or HTML displayed for the option
   */
  label: PropTypes.node,
  /**
   * Indicates the option is currently selected
   */
  selected: PropTypes.bool,
  /**
   * Data represented by the option
   */
  value: PropTypes.string
};

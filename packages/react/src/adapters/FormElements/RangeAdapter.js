import React, { Component } from "react";
import PropTypes from "prop-types";
import { Range as VanillaRange } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from "../HIGAdapter";

export default class RangeAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Range"
        HIGConstructor={VanillaRange}
      >
        {adapterProps => (
          <div>
            <ControlsProp
              handler={this.props.onInput}
              listener="onInput"
              setter="setValue"
              value={this.props.value}
              defaultValue={this.props.defaultValue}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onBlur"
              handler={this.props.onBlur}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onChange"
              handler={this.props.onChange}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onFocus"
              handler={this.props.onFocus}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setInstructions"
              value={this.props.instructions}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setLabel"
              value={this.props.label}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setMin"
              value={this.props.min}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setMax"
              value={this.props.max}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setStep"
              value={this.props.step}
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.disabled} {...adapterProps}>
              {(instance, value) =>
                value ? instance.disable() : instance.enable()}
            </MapsPropToMethod>
            <MapsPropToMethod value={this.props.required} {...adapterProps}>
              {(instance, value) =>
                value ? instance.required(value) : instance.noLongerRequired()}
            </MapsPropToMethod>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

RangeAdapter.propTypes = {
  /**
   * Initial value of the field, user action will override
   */
  defaultValue: PropTypes.string,
  /**
   * Prevents user actions on the field
   */
  disabled: PropTypes.bool,
  /**
   * Instructional text for the field
   */
  instructions: PropTypes.string,
  /**
   * Text describing what the field represents
   */
  label: PropTypes.string,
  /**
   * Name of the field when submitted with a form
   */
  name: PropTypes.string,
  /**
   * Called when user moves focus from the field
   */
  onBlur: PropTypes.func,
  /**
   * Called after user changes the value of the field
   */
  onChange: PropTypes.func,
  /**
   * Called when user puts focus onto the field
   */
  onFocus: PropTypes.func,
  /**
   * Called as user changes the value of the field
   */
  onInput: PropTypes.func,
  /**
   * Text describing why the field is required
   */
  required: PropTypes.string,
  /**
   * Value of the field
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

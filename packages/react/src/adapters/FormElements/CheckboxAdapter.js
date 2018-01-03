import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox as VanillaCheckbox } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from "../HIGAdapter";

export default class CheckboxAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Checkbox"
        HIGConstructor={VanillaCheckbox}
      >
        {adapterProps => (
          <div>
            <ControlsProp
              eventTargetPropName="indeterminate"
              handler={this.props.onChange}
              listener="onChange"
              value={this.props.indeterminate}
              defaultValue={
                this.props.defaultIndeterminate !== undefined
                  ? this.props.defaultIndeterminate
                  : false
              }
              {...adapterProps}
            >
              {(instance, value) =>
                value ? instance.indeterminate() : instance.determinate()}
            </ControlsProp>

            <ControlsProp
              eventTargetPropName="checked"
              handler={this.props.onChange}
              listener="onChange"
              value={this.props.checked}
              defaultValue={
                this.props.defaultChecked !== undefined
                  ? this.props.defaultChecked
                  : false
              }
              {...adapterProps}
            >
              {(instance, value) =>
                value ? instance.check() : instance.uncheck()}
            </ControlsProp>

            <MapsEventListener
              listener="onFocus"
              handler={this.props.onFocus}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onHover"
              handler={this.props.onFocus}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setLabel"
              value={this.props.label}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setName"
              value={this.props.name}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setValue"
              value={this.props.value}
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

CheckboxAdapter.propTypes = {
  /**
   * Checks the checkbox
   */
  checked: PropTypes.bool,
  /**
   * Initially checks the checkbox, but allows user action to change it
   */
  defaultChecked: PropTypes.bool,
  /**
   * Prevents user actions on the checkbox
   */
  disabled: PropTypes.bool,
  /**
   * Sets indeterminate state for checkbox
   */
  indeterminate: PropTypes.bool,
  /**
   * Text identifying the field
   */
  label: PropTypes.string,
  /**
   * The name of the checkbox as submitted with a form
   */
  name: PropTypes.string,
  /**
   * Called when user moves focus from the field
   */
  onBlur: PropTypes.func,
  /**
   * Called when user changes the value of the field
   */
  onChange: PropTypes.func,
  /**
   * Called when user puts focus on the field
   */
  onFocus: PropTypes.func,
  /**
   * Marks the field as required, text shown to explain requirement
   */
  required: PropTypes.string,
  /**
   * Value submitted with a form if checked
   */
  value: PropTypes.string
};

import React from "react";
import PropTypes from "prop-types";
import { Checkbox as VanillaCheckbox } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from "../HIGAdapter";

function CheckboxAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="Checkbox"
      HIGConstructor={VanillaCheckbox}
    >
      {adapterProps => (
        <div>
          <ControlsProp
            eventTargetPropName="indeterminate"
            handler={props.onChange}
            listener="onChange"
            value={props.indeterminate}
            defaultValue={
              props.defaultIndeterminate !== undefined
                ? props.defaultIndeterminate
                : false
            }
            {...adapterProps}
          >
            {(instance, value) =>
              value ? instance.indeterminate() : instance.determinate()}
          </ControlsProp>

          <ControlsProp
            eventTargetPropName="checked"
            handler={props.onChange}
            listener="onChange"
            value={props.checked}
            defaultValue={
              props.defaultChecked !== undefined ? props.defaultChecked : false
            }
            {...adapterProps}
          >
            {(instance, value) =>
              value ? instance.check() : instance.uncheck()}
          </ControlsProp>

          <MapsEventListener
            listener="onFocus"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onHover"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setLabel"
            value={props.label}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setName"
            value={props.name}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setValue"
            value={props.value}
            {...adapterProps}
          />
          <MapsPropToMethod value={props.disabled} {...adapterProps}>
            {(instance, value) =>
              value ? instance.disable() : instance.enable()}
          </MapsPropToMethod>

          <MapsPropToMethod value={props.required} {...adapterProps}>
            {(instance, value) =>
              value ? instance.required(value) : instance.noLongerRequired()}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

CheckboxAdapter.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.string,
  value: PropTypes.string
};

CheckboxAdapter.defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  disabled: undefined,
  indeterminate: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  required: undefined,
  value: undefined
};

CheckboxAdapter.__docgenInfo = {
  props: {
    checked: {
      description: "checks the checkbox"
    },
    defaultChecked: {
      description:
        "initially checks the checkbox, but allows user action to change it"
    },
    disabled: {
      description: "prevents user actions on the checkbox"
    },
    indeterminate: {
      description: "sets indeterminate state for checkbox"
    },
    label: {
      description: "text identifying the field"
    },
    name: {
      description: "the name of the checkbox as submitted with a form"
    },
    onBlur: {
      description: "called when user moves focus from the field"
    },
    onChange: {
      description: "called when user changes the value of the field"
    },
    onFocus: {
      description: "called when user puts focus on the field"
    },
    required: {
      description:
        "marks the field as required, text shown to explain requirment"
    },
    value: {
      description: "value submitted with a form if checked"
    }
  }
};

export default CheckboxAdapter;

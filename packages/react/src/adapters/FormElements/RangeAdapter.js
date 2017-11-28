import React from "react";
import PropTypes from "prop-types";
import { Range as VanillaRange } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from "../HIGAdapter";

function RangeAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Range" HIGConstructor={VanillaRange}>
      {adapterProps => (
        <div>
          <ControlsProp
            handler={props.onInput}
            listener="onInput"
            setter="setValue"
            value={props.value}
            defaultValue={props.defaultValue}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onBlur"
            handler={props.onBlur}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onChange"
            handler={props.onChange}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onFocus"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setInstructions"
            value={props.instructions}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setLabel"
            value={props.label}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setMin"
            value={props.min}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setMax"
            value={props.max}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setStep"
            value={props.step}
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

RangeAdapter.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  required: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RangeAdapter.defaultProps = {
  defaultValue: undefined,
  disabled: undefined,
  instructions: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onInput: undefined,
  required: undefined,
  value: undefined
};

RangeAdapter.__docgenInfo = {
  props: {
    defaultValue: {
      description: "initial value of the field, user raction will override"
    },
    disabled: {
      description: "prevents user actions on the field"
    },
    instructions: {
      description: "instructional text for the field"
    },
    label: {
      description: "text describing what the field represents"
    },
    name: {
      description: "name of the field when submitted with a form"
    },
    onBlur: {
      description: "called when user moves focus from the field"
    },
    onChange: {
      description: "called after user changes the value of the field"
    },
    onFocus: {
      description: "called when user puts focus onto the field"
    },
    onInput: {
      description: "called as user changes the value of the field"
    },
    required: {
      description: "text describing why the field is required"
    },
    value: {
      description: "value of the field"
    }
  }
};

export default RangeAdapter;

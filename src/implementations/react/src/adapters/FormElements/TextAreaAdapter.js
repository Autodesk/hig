import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from "../HIGAdapter";

function TextAreaAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="TextArea" HIGConstructor={HIG.TextArea}>
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
            setter="setPlaceholder"
            value={props.placeholder}
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

TextAreaAdapter.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  value: PropTypes.string
};

TextAreaAdapter.defaultProps = {
  defaultValue: undefined,
  disabled: undefined,
  instructions: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onInput: undefined,
  placeholder: undefined,
  required: undefined,
  value: undefined
};

TextAreaAdapter.__docgenInfo = {
  props: {
    defaultValue: {
      description: "initial value of the field, user actions will override"
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
    placeholder: {
      description: "example of what the user should type into the field"
    },
    required: {
      description: "text describing why the field is required"
    },
    value: {
      description: "value of the field"
    }
  }
};

export default TextAreaAdapter;

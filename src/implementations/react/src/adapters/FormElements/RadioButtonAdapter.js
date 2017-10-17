import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from "../HIGAdapter";

function RadioButtonAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="RadioButton"
      HIGConstructor={HIG.RadioButton}
    >
      {adapterProps => (
        <div>
          <ControlsProp
            eventTargetPropName="checked"
            handler={props.onChange}
            listener="onChange"
            value={props.checked}
            defaultValue={props.defaultChecked}
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

RadioButtonAdapter.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClearButtonClick: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  showClearButton: PropTypes.bool,
  value: PropTypes.string
};

RadioButtonAdapter.defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  disabled: undefined,
  icon: undefined,
  instructions: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onClearButtonClick: undefined,
  onFocus: undefined,
  onInput: undefined,
  placeholder: undefined,
  required: undefined,
  showClearButton: undefined,
  value: undefined
};

export default RadioButtonAdapter;

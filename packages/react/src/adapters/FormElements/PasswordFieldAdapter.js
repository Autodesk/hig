import React from "react";
import PropTypes from "prop-types";
import { PasswordField as VanillaPasswordField } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from "../HIGAdapter";

function PasswordFieldAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="PasswordField"
      HIGConstructor={VanillaPasswordField}
    >
      {adapterProps => (
        <div>
          <ControlsProp
            listener="onInput"
            handler={props.onInput}
            setter="setValue"
            value={props.value}
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
          <MapsEventListener
            listener="onPasswordRevealButtonClick"
            handler={props.onPasswordRevealButtonClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onPasswordHideButtonClick"
            handler={props.onPasswordHideButtonClick}
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
          <MapsPropToMethod value={props.revealPassword} {...adapterProps}>
            {(instance, value) =>
              value ? instance.revealPassword() : instance.hidePassword()}
          </MapsPropToMethod>
          <MapsPropToMethod
            value={props.showPasswordHideButton}
            {...adapterProps}
          >
            {(instance, value) =>
              value
                ? instance.showPasswordHideButton()
                : instance.hidePasswordHideButton()}
          </MapsPropToMethod>
          <MapsPropToMethod
            value={props.showPasswordRevealButton}
            {...adapterProps}
          >
            {(instance, value) =>
              value
                ? instance.showPasswordRevealButton()
                : instance.hidePasswordRevealButton()}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

PasswordFieldAdapter.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onPasswordHideButtonClick: PropTypes.func,
  onPasswordRevealButtonClick: PropTypes.func,
  placeholder: PropTypes.string,
  revealPassword: PropTypes.bool,
  showPasswordHideButton: PropTypes.bool,
  showPasswordRevealButton: PropTypes.bool,
  required: PropTypes.string,
  value: PropTypes.string
};

PasswordFieldAdapter.defaultProps = {
  disabled: undefined,
  icon: undefined,
  instructions: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onInput: undefined,
  onPasswordHideButtonClick: undefined,
  onPasswordRevealButtonClick: undefined,
  placeholder: undefined,
  revealPassword: undefined,
  showPasswordHideButton: undefined,
  showPasswordRevealButton: undefined,
  required: undefined,
  value: undefined
};

export default PasswordFieldAdapter;

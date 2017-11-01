import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountsHIGChildList
} from "../HIGAdapter";

function DropdownAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Dropdown" HIGConstructor={HIG.Dropdown}>
      {adapterProps => (
        <div>
          <MapsEventListener
            listener="onBlur"
            handler={props.onBlur}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onClickOutside"
            handler={props.onClickOutside}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onFocus"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onKeypress"
            handler={props.onKeypress}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onTargetClick"
            handler={props.onTargetClick}
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.label}
            setter="setLabel"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.instructions}
            setter="setInstructions"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.placeholder}
            setter="setPlaceholder"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => (value ? instance.open() : instance.close())}
          </MapsPropToMethod>
          <MapsPropToMethod value={props.disabled} {...adapterProps}>
            {(instance, value) =>
              value ? instance.disable() : instance.enable()}
          </MapsPropToMethod>
          <MapsPropToMethod value={props.required} {...adapterProps}>
            {(instance, value) =>
              value ? instance.required(value) : instance.noLongerRequired()}
          </MapsPropToMethod>
          <MapsPropToMethod
            value={props.selectedOptionLabel}
            setter="setSelectedOptionLabel"
            {...adapterProps}
          />
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

DropdownAdapter.propTypes = {
  label: PropTypes.string,
  instructions: PropTypes.string,
  placeholder: PropTypes.string,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.string,
  onBlur: PropTypes.func,
  onClickOutside: PropTypes.func,
  onFocus: PropTypes.func,
  onKeypress: PropTypes.func,
  onTargetClick: PropTypes.func,
  selectedOptionLabel: PropTypes.string,
  children: PropTypes.node
};

DropdownAdapter.defaultProps = {
  label: undefined,
  instructions: undefined,
  placeholder: undefined,
  open: undefined,
  disabled: undefined,
  required: undefined,
  onBlur: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onKeypress: undefined,
  onTargetClick: undefined,
  selectedOptionLabel: undefined,
  children: undefined
};

export default DropdownAdapter;

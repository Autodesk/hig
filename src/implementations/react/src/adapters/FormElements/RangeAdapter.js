import React from 'react';
import PropTypes from 'prop-types';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from '../HIGAdapter';
import * as HIG from 'hig-vanilla';

function RangeAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Range" HIGConstructor={HIG.Range}>
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
          <MapsEventListener listener="onBlur" handler={props.onBlur} {...adapterProps} />
          <MapsEventListener listener="onChange" handler={props.onChange} {...adapterProps} />
          <MapsEventListener listener="onFocus" handler={props.onFocus} {...adapterProps} />
          <MapsPropToMethod setter="setInstructions" value={props.instructions} {...adapterProps} />
          <MapsPropToMethod setter="setLabel" value={props.label} {...adapterProps} />
          <MapsPropToMethod setter="setMin" value={props.min} {...adapterProps} />
          <MapsPropToMethod setter="setMax" value={props.max} {...adapterProps} />
          <MapsPropToMethod setter="setStep" value={props.step} {...adapterProps} />
          <MapsPropToMethod value={props.disabled} {...adapterProps}>
            {(instance, value) => (value ? instance.disable() : instance.enable())}
          </MapsPropToMethod>
          <MapsPropToMethod value={props.required} {...adapterProps}>
            {(instance, value) => (value ? instance.required(value) : instance.noLongerRequired())}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

RangeAdapter.propTypes = {
  defaultValue: PropTypes.string,
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

RangeAdapter.defaultProps = {
  defaultValue: undefined,
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

export default RangeAdapter;

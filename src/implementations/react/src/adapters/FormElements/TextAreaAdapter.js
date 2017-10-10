import React from 'react';
import PropTypes from 'prop-types';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  ControlsProp
} from '../HIGAdapter';
import * as HIG from 'hig-vanilla';

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
          <MapsEventListener listener="onBlur" handler={props.onBlur} {...adapterProps} />
          <MapsEventListener listener="onChange" handler={props.onChange} {...adapterProps} />
          <MapsEventListener listener="onFocus" handler={props.onFocus} {...adapterProps} />
          <MapsPropToMethod setter="setInstructions" value={props.instructions} {...adapterProps} />
          <MapsPropToMethod setter="setPlaceholder" value={props.placeholder} {...adapterProps} />
          <MapsPropToMethod setter="setLabel" value={props.label} {...adapterProps} />
          <MapsPropToMethod setter="setName" value={props.name} {...adapterProps} />
          <MapsPropToMethod value={props.disabled} {...adapterProps}>
            {(instance, value) => value ? instance.disable() : instance.enable()}
          </MapsPropToMethod>
          <MapsPropToMethod value={props.required} {...adapterProps}>
            {(instance, value) => value ? instance.required(value) : instance.noLongerRequired()}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

TextAreaAdapter.propTypes = {
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
  value: PropTypes.string,
};

export default TextAreaAdapter;

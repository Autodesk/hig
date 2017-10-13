import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParentList
} from '../HIGAdapter';

function OptionAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Option" HIGConstructor={HIG.Dropdown._partials.Option}>
      {adapterProps => (
        <div>
          <MapsPropToMethod value={props.label} setter="setLabel" {...adapterProps} />
          <MapsPropToMethod value={props.value} setter="setValue" {...adapterProps} />
          <MapsPropToMethod value={props.selected} {...adapterProps}>
            {(instance, value) => (value ? instance.select() : instance.deselect())}
          </MapsPropToMethod>
          <MapsEventListener listener="onHover" handler={props.onHover} {...adapterProps} />
          <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
          <MountedByHIGParentList mounter="addOption" {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

OptionAdapter.propTypes = {
  index: PropTypes.number,
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
  selected: PropTypes.bool,
  value: PropTypes.string
};

OptionAdapter.defaultProps = {
  index: undefined,
  onHover: undefined,
  onClick: undefined,
  label: undefined,
  selected: undefined,
  value: undefined
};

export default OptionAdapter;

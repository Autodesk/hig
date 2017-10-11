import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MountedByHIGParent,
  MapsPropToMethod,
  MapsEventListener
} from '../../HIGAdapter';

function SearchAdapter(props) {
  return (
    <HIGAdapter displayName="Search" HIGConstructor={HIG.GlobalNav._partials.TopNav._partials.Search} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addSearch" {...adapterProps} />
          <MapsEventListener listener="onInput" handler={props.onInput} {...adapterProps} />
          <MapsEventListener listener="onFocusIn" handler={props.onFocus} {...adapterProps} />
          <MapsEventListener listener="onFocusOut" handler={props.onBlur} {...adapterProps} />
          <MapsEventListener listener="onClearIconClick" handler={props.onClearIconClick} {...adapterProps} />
          <MapsPropToMethod setter="setQuery" value={props.query} {...adapterProps} />
          <MapsPropToMethod setter="setPlaceholder" value={props.placeholder} {...adapterProps} />
          <MapsPropToMethod value={props.showClearIcon} {...adapterProps}>
            {(instance, value) => { value ? instance.showClearIcon() : instance.hideClearIcon(); }}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

SearchAdapter.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  clearIconVisible: PropTypes.bool,
  onClearIconClick: PropTypes.func,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default SearchAdapter;

import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent
} from '../../HIGAdapter';

function SearchAdapter(props) {
  return (
    <HIGAdapter displayName="Search" HIGConstructor={HIG.GlobalNav._partials.SideNav._partials.Search} {...props}>{adapterProps => (
      <div>
        <MapsPropToMethod value={props.icon} setter="setIcon" {...adapterProps} />
        <MapsPropToMethod value={props.placeholder} setter="setPlaceholder" {...adapterProps} />
        <MapsPropToMethod value={props.value} setter="setValue" {...adapterProps} />
        <MapsPropToMethod value={props.showClearIcon} {...adapterProps}>
          {(instance, value) => (value ? instance.showClearIcon() : instance.hideClearIcon()) }
        </MapsPropToMethod>
        <MapsEventListener listener="onFocusOut" handler={props.onBlur} {...adapterProps} />
        <MapsEventListener listener="onFocusIn" handler={props.onFocus} {...adapterProps} />
        <MapsEventListener listener="onClearIconClick" handler={props.onClearIconClick} {...adapterProps} />
        <MapsEventListener listener="onInput" handler={props.onInput} {...adapterProps} />
        <MountedByHIGParent mounter="addSearch" {...adapterProps} />
      </div>
    )}
    </HIGAdapter>
  );
}

export default SearchAdapter;

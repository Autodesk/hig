import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent,
  ControlsProp
} from "../../HIGAdapter";

function SearchAdapter(props) {
  return (
    <HIGAdapter
      displayName="Search"
      HIGConstructor={HIG.GlobalNav._partials.SideNav._partials.Search}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.icon}
            setter="setIcon"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.placeholder}
            setter="setPlaceholder"
            {...adapterProps}
          />
          <ControlsProp
            listener="onInput"
            handler={props.onInput}
            value={props.value}
            setter="setValue"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.clearIconVisible} {...adapterProps}>
            {(instance, value) =>
              value ? instance.showClearIcon() : instance.hideClearIcon()}
          </MapsPropToMethod>
          <MapsEventListener
            listener="onFocusOut"
            handler={props.onBlur}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onFocusIn"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onClearIconClick"
            handler={props.onClearIconClick}
            {...adapterProps}
          />
          <MountedByHIGParent mounter="addSearch" {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

SearchAdapter.propTypes = {
  onInput: PropTypes.func,
  clearIconVisible: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onClearIconClick: PropTypes.func
};

SearchAdapter.defaultProps = {
  onInput: undefined,
  clearIconVisible: undefined,
  onBlur: undefined,
  onFocus: undefined,
  icon: undefined,
  placeholder: undefined,
  value: undefined,
  onClearIconClick: undefined
};

export default SearchAdapter;

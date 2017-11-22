import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MountedByHIGParent,
  MapsPropToMethod,
  MapsEventListener,
  MountsHIGChildList
} from "../../HIGAdapter";

function SearchAdapter(props) {
  return (
    <HIGAdapter
      displayName="Search"
      HIGConstructor={VanillaGlobalNav._partials.TopNav._partials.Search}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addSearch" {...adapterProps} />
          <MapsEventListener
            listener="onInput"
            handler={props.onInput}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onFocusIn"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onFocusOut"
            handler={props.onBlur}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onClearIconClick"
            handler={props.onClearIconClick}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setQuery"
            value={props.query}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setPlaceholder"
            value={props.placeholder}
            {...adapterProps}
          />
          <MapsPropToMethod value={props.showClearIcon} {...adapterProps}>
            {(instance, value) =>
              value ? instance.showClearIcon() : instance.hideClearIcon()}
          </MapsPropToMethod>
          <MapsPropToMethod value={props.showOptions} {...adapterProps}>
            {(instance, value) =>
              value ? instance.showOptions() : instance.hideOptions()}
          </MapsPropToMethod>

          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
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
  onBlur: PropTypes.func,
  showClearIcon: PropTypes.bool,
  showOptions: PropTypes.bool,
  children: PropTypes.node
};

SearchAdapter.defaultProps = {
  query: undefined,
  placeholder: undefined,
  clearIconVisible: undefined,
  onClearIconClick: undefined,
  onInput: undefined,
  onFocus: undefined,
  onBlur: undefined,
  showClearIcon: undefined,
  showOptions: undefined,
  children: undefined
};

export default SearchAdapter;

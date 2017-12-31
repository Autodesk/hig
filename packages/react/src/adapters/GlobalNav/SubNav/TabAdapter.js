import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParentList
} from "../../HIGAdapter";

function TabsAdapter(props) {
  return (
    <HIGAdapter
      displayName="Tab"
      HIGConstructor={
        VanillaGlobalNav._partials.SubNav._partials.Tabs._partials.Tab
      }
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addTab" {...adapterProps} />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setLabel"
            value={props.label}
            {...adapterProps}
          />
          <MapsPropToMethod value={props.active} {...adapterProps}>
            {(instance, value) =>
              value ? instance.activate() : instance.deactivate()}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

TabsAdapter.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  active: PropTypes.bool
};

TabsAdapter.defaultProps = {
  onClick: undefined,
  label: undefined,
  active: undefined
};

export default TabsAdapter;

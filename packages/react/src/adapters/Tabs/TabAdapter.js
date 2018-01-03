import React from "react";
import { Tabs } from "hig-vanilla";
import HIGAdaper, {
  MountedByHIGParentList,
  MapsPropToMethod,
  MapsEventListener
} from "../HIGAdapter";

function TabAdapter(props) {
  return (
    <HIGAdaper {...props} displayName="Tab" HIGConstructor={Tabs._partials.Tab}>
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addTab" {...adapterProps} />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.label}
            setter="setLabel"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.active} {...adapterProps}>
            {(instance, value) =>
              value ? instance.activate() : instance.deactivate()
            }
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdaper>
  );
}

export default TabAdapter;

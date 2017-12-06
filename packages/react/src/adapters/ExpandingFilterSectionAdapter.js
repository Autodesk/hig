import React from "react";
import { ExpandingFilterSection as VanillaExpandingFilterSection } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountsAnyChild
} from "./HIGAdapter";

function ExpandingFilterSectionAdapter(props) {
  return (
    <HIGAdapter
      displayName="ExpandingFilterSection"
      HIGConstructor={VanillaExpandingFilterSection}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.size}
            setter="setSize"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => (value ? instance.open() : instance.close())}
          </MapsPropToMethod>
          <MapsPropToMethod
            value={props.label}
            setter="setLabel"
            {...adapterProps}
          />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

export default ExpandingFilterSectionAdapter;

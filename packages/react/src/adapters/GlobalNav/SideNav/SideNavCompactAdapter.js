import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParent,
  MountsHIGChildList
} from "../../HIGAdapter";

import GroupAdapter from "./GroupAdapter";

function sortChildren(children) {
  return {
    groups: children.filter(child => child.type === GroupAdapter)
  };
}

export default function SideNavCompactAdapter(props) {
  const { groups } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter
      displayName="SideNavCompact"
      HIGConstructor={
        VanillaGlobalNav._partials.SideNav._partials.SideNavCompact
      }
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addContent" {...adapterProps} />
          <MapsPropToMethod
            value={props.showVariantToggleButton}
            {...adapterProps}
          >
            {(instance, value) =>
              value
                ? instance.showVariantToggleButton()
                : instance.hideVariantToggleButton()
            }
          </MapsPropToMethod>
          <MapsEventListener
            listener="onVariantToggleClick"
            handler={props.onVariantToggleClick}
            {...adapterProps}
          />
          <MountsHIGChildList {...adapterProps}>{groups}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

SideNavCompactAdapter.propTypes = {
  /**
   * Calls the provided callback when user clicks on the expand button
   */
  onVariantToggleClick: PropTypes.func,
  /**
   * Show or hide the expand button
   */
  showVariantToggleButton: PropTypes.bool
};

SideNavCompactAdapter.defaultProps = {
  showVariantToggleButton: true
};

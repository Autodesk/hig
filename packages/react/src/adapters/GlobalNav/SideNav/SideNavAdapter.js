import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MountedByHIGParent,
  MountsHIGChild
} from "../../HIGAdapter";

export default function SideNavAdapter(props) {
  return (
    <HIGAdapter
      displayName="SideNav"
      HIGConstructor={VanillaGlobalNav._partials.SideNav}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addSideNav" {...adapterProps} />
          <MapsEventListener
            listener="onMouseEnter"
            handler={props.onMouseEnter}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onMouseLeave"
            handler={props.onMouseLeave}
            {...adapterProps}
          />
          <MountsHIGChild {...adapterProps}>{props.children}</MountsHIGChild>
        </div>
      )}
    </HIGAdapter>
  );
}

SideNavAdapter.propTypes = {
  children: PropTypes.node,
  /**
   * Callback for when user first starts hovering over the sidenav
   */
  onMouseEnter: PropTypes.func,
  /**
   * Callback for when user stops hovering over the sidenav
   */
  onMouseLeave: PropTypes.func
};

SideNavAdapter.defaultProps = {
  children: null
};

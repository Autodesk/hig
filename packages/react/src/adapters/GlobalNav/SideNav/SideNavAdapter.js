import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MountedByHIGParent,
  MountsHIGChild
} from "../../HIGAdapter";

export default function SideNavFullAdapter(props) {
  return (
    <HIGAdapter
      displayName="SideNav"
      HIGConstructor={VanillaGlobalNav._partials.SideNav}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addSideNav" {...adapterProps} />
          <MountsHIGChild {...adapterProps}>{props.children}</MountsHIGChild>
        </div>
      )}
    </HIGAdapter>
  );
}

SideNavFullAdapter.propTypes = {
  children: PropTypes.node
};

SideNavFullAdapter.defaultProps = {
  children: null
};

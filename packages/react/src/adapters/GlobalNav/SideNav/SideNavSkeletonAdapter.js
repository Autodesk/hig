import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, { MountedByHIGParent } from "../../HIGAdapter";

function SideNavSkeletonAdapter(props) {
  return (
    <HIGAdapter
      displayName="SideNavSkeleton"
      HIGConstructor={
        VanillaGlobalNav._partials.SideNav._partials.SideNavSkeleton
      }
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addContent" {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

SideNavSkeletonAdapter.propTypes = {};

SideNavSkeletonAdapter.defaultProps = {};

export default SideNavSkeletonAdapter;

import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
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
          <MountsHIGChildList {...adapterProps}>{groups}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

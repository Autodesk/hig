import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MountedByHIGParentList,
  MountsHIGChildList
} from '../../HIGAdapter';

function GroupAdapter(props) {
  return (
    <HIGAdapter displayName="Group" HIGConstructor={HIG.GlobalNav._partials.SideNav._partials.Group} {...props}>{adapterProps => (
      <div>
        <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        <MountedByHIGParentList mounter="addGroup" {...adapterProps} />
      </div>
    )}
    </HIGAdapter>
  );
}

export default GroupAdapter;

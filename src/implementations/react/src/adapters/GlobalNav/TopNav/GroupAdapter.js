import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParentList,
  MountsHIGChildList
} from '../../HIGAdapter';

function GroupAdapter(props) {
  return (
    <HIGAdapter {...props} name="Group" HIGConstructor={HIG.GlobalNav._partials.TopNav._partials.Help._partials.Group}>
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addGroup" {...adapterProps}>{props.children}</MountedByHIGParentList>
          <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

export default GroupAdapter;

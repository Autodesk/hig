import React from 'react';
import HIGAdapter, {
  MountedByHIGParent,
  MountsHIGChildList
} from '../../HIGAdapter';
import * as HIG from 'hig-vanilla';

function TabsAdapter(props) {
  return (
    <HIGAdapter Name="Tabs" HIGConstructor={HIG.GlobalNav._partials.SubNav._partials.Tabs} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addTabs" {...adapterProps} />
          <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  )
}

export default TabsAdapter;
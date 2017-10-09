import React from 'react';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParentList,
} from '../../HIGAdapter';
import * as HIG from 'hig-vanilla';

function TabsAdapter(props) {
  return (
    <HIGAdapter name="Tab" HIGConstructor={HIG.GlobalNav._partials.SubNav._partials.Tabs._partials.Tab} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addTab" {...adapterProps} />
          <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
          <MapsPropToMethod setter="setLabel" value={props.label} {...adapterProps} />
          <MapsPropToMethod value={props.active} {...adapterProps}>
            {(instance, value) => { value ? instance.activate() : instance.deactivate() }}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  )
}

export default TabsAdapter;

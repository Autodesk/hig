import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod
} from '../../HIGAdapter';
import MountedByHIGParentList from '../../HIGAdapter/MountedByHIGParentList';

function OptionAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Option" HIGConstructor={HIG.GlobalNav._partials.TopNav._partials.Help._partials.Option}>
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addOption" {...adapterProps} />
          <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
          <MapsPropToMethod setter="setName" value={props.name} {...adapterProps} />
          <MapsPropToMethod setter="setLink" value={props.link} {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

export default OptionAdapter;

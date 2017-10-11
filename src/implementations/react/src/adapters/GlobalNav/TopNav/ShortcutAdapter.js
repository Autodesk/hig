import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent
} from '../../HIGAdapter';

function ShortcutAdapter(props) {
  return (
    <HIGAdapter displayName="Shortcut" HIGConstructor={HIG.GlobalNav._partials.TopNav._partials.Shortcut} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addShortcut" {...adapterProps} />
          <MapsEventListener handler={props.onClick} listener="onClick" {...adapterProps} />
          <MapsPropToMethod value={props.icon} setter="setIcon" {...adapterProps} />
          <MapsPropToMethod value={props.link} setter="setLink" {...adapterProps} />
          <MapsPropToMethod value={props.title} setter="setTitle" {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

export default ShortcutAdapter;

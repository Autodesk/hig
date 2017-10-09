import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParent,
  MountsHIGChildList
} from '../../HIGAdapter';

function SubNavAdapter(props) {
  return (
    <HIGAdapter name="SubNav" HIGConstructor={HIG.GlobalNav._partials.SubNav} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addSubNav" {...adapterProps} />
          <MapsEventListener listener="onModuleIndicatorClick" handler={props.onModuleIndicatorClick} {...adapterProps} />
          <MapsPropToMethod value={props.moduleIndicatorName} setter="setModuleIndicatorName" {...adapterProps} />
          <MapsPropToMethod value={props.moduleIndicatorIcon} setter="setModuleIndicatorIcon" {...adapterProps} />
          <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

export default SubNavAdapter;

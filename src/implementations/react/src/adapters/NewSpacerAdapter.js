import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from './HIGAdapter';

function NewSpacerAdapter(props) {
  return (
    <HIGAdapter {...props} name="Spacer" HIGConstructor={HIG.Spacer}>
      {(adapterProps) => (
        <div>
          <MapsPropToMethod value={props.inset} setter="setInset" {...adapterProps} />
          <MapsPropToMethod value={props.type} setter="setType" {...adapterProps} />
          <MapsPropToMethod value={props.width} setter="setWidth" {...adapterProps} />
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

export default NewSpacerAdapter;

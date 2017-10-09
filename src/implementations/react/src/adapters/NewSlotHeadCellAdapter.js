import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { MapsPropToMethod, MountsAnyChild, MountedByHIGParentList } from './HIGAdapter';

function NewSlotHeadCellAdapter(props) {
  return (
    <HIGAdapter {...props} name="Slot" HIGConstructor={HIG.Table._partials.TableHead._partials.SlotHeadCell}>
      {(adapterProps) => (
        <div>
          <MapsPropToMethod value={props.width} setter="setWidth" {...adapterProps} />
          <MountedByHIGParentList mounter="addCell" {...adapterProps} />
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

export default NewSlotHeadCellAdapter;

import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { MapsPropToMethod, MountsAnyChild, MountedByHIGParentList } from './HIGAdapter';

function NewSlotCellAdapter(props) {
  return (
    <HIGAdapter {...props} name="Slot" HIGConstructor={HIG.Table._partials.TableRow._partials.SlotCell}>
      {(adapterProps) => (
        <div>
          <MountedByHIGParentList mounter="addCell" {...adapterProps} />
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

export default NewSlotCellAdapter;

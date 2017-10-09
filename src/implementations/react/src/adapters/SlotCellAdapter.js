import React from 'react';
import * as HIG from 'hig-vanilla';
import * as PropTypes from "prop-types";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild, MountedByHIGParentList } from './HIGAdapter';

function SlotCellAdapter(props) {
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

SlotCellAdapter.propTypes = {
  children: PropTypes.node
};

SlotCellAdapter.__docgenInfo = {
  props: {
    children: {
      description: "content for slot cell"
    }
  }
};

export default SlotCellAdapter;

import React from "react";
import { Table as VanillaTable } from "hig-vanilla";
import * as PropTypes from "prop-types";
import HIGAdapter, {
  MountsAnyChild,
  MountedByHIGParentList
} from "../HIGAdapter";

function SlotCellAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="Slot"
      HIGConstructor={VanillaTable._partials.TableRow._partials.SlotCell}
    >
      {adapterProps => (
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

SlotCellAdapter.defaultProps = {
  children: undefined
};

SlotCellAdapter.__docgenInfo = {
  props: {
    children: {
      description: "content for slot cell"
    }
  }
};

export default SlotCellAdapter;

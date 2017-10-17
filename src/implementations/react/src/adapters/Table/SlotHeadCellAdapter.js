import React from "react";
import * as HIG from "hig-vanilla";
import * as PropTypes from "prop-types";
import HIGAdapter, {
  MapsPropToMethod,
  MountsAnyChild,
  MountedByHIGParentList
} from "../HIGAdapter";

function SlotHeadCellAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="Slot"
      HIGConstructor={HIG.Table._partials.TableHead._partials.SlotHeadCell}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.width}
            setter="setWidth"
            {...adapterProps}
          />
          <MountedByHIGParentList mounter="addCell" {...adapterProps} />
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

SlotHeadCellAdapter.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
};

SlotHeadCellAdapter.defaultProps = {
  children: undefined,
  width: undefined
};

SlotHeadCellAdapter.__docgenInfo = {
  props: {
    children: {
      description: "content for slot cell"
    },
    width: {
      description: "sets {String} width of the cell"
    }
  }
};

export default SlotHeadCellAdapter;

import React from "react";
import { Table as VanillaTable } from "hig-vanilla";
import * as PropTypes from "prop-types";

import HIGAdapter, {
  MapsPropToMethod,
  MountedByHIGParent,
  MountsHIGChildList
} from "../HIGAdapter";

function TableRowAdapter(props) {
  return (
    <HIGAdapter
      displayName="TableRow"
      HIGConstructor={VanillaTable._partials.TableRow}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod value={props.selected} {...adapterProps}>
            {(instance, value) =>
              value ? instance.select() : instance.deselect()}
          </MapsPropToMethod>
          <MountedByHIGParent mounter="addTableRow" {...adapterProps} />
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

TableRowAdapter.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node
};

TableRowAdapter.defaultProps = {
  selected: undefined,
  children: undefined
};

export default TableRowAdapter;

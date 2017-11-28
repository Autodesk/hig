import React from "react";
import PropTypes from "prop-types";
import { Table as VanillaTable } from "hig-vanilla";

import HIGAdapter, {
  MountedByHIGParent,
  MountsHIGChildList
} from "../HIGAdapter";

function TableHeadAdapter(props) {
  return (
    <HIGAdapter
      displayName="TableHead"
      HIGConstructor={VanillaTable._partials.TableHead}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addTableHead" {...adapterProps} />
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

TableHeadAdapter.propTypes = {
  children: PropTypes.node
};

TableHeadAdapter.defaultProps = {
  children: undefined
};

export default TableHeadAdapter;

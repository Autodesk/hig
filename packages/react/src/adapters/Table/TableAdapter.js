import React from "react";
import { Table as VanillaTable } from "hig-vanilla";

import HIGAdapter, {
  MapsPropToMethod,
  MountsHIGChildList,
  MountsHIGChild
} from "../HIGAdapter";

import TableHeadAdapter from "./TableHeadAdapter";

function sortChildren(children) {
  return {
    tableHead: children.find(child => child.type === TableHeadAdapter),
    otherChildren: children.filter(
      child => ![TableHeadAdapter].includes(child.type)
    )
  };
}
function TableAdapter(props) {
  const { tableHead, otherChildren } = sortChildren(
    React.Children.toArray(props.children)
  );
  return (
    <HIGAdapter displayName="Table" HIGConstructor={VanillaTable} {...props}>
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.density}
            setter="setDensity"
            {...adapterProps}
          />
          <MountsHIGChild {...adapterProps}>{tableHead}</MountsHIGChild>
          <MountsHIGChildList {...adapterProps}>
            {otherChildren}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

export default TableAdapter;

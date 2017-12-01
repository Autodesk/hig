import React from "react";
import PropTypes from "prop-types";
import { ContainerViewLeft as ContainerViewLeftVanilla } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

function ContainerViewLeftAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="ContainerViewLeft"
      HIGConstructor={ContainerViewLeftVanilla}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => (value ? instance.open() : instance.close())}
          </MapsPropToMethod>
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

ContainerViewLeftAdapter.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node
};

ContainerViewLeftAdapter.defaultProps = {
  open: undefined,
  children: undefined
};

export default ContainerViewLeftAdapter;

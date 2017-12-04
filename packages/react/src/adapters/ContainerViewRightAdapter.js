import React from "react";
import PropTypes from "prop-types";
import { ContainerViewRight as ContainerViewRightVanilla } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

function ContainerViewRightAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="ContainerViewRight"
      HIGConstructor={ContainerViewRightVanilla}
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

ContainerViewRightAdapter.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node
};

ContainerViewRightAdapter.defaultProps = {
  open: undefined,
  children: undefined
};

ContainerViewRightAdapter.__docgenInfo = {
  props: {
    open: {
      description: "{bool} sets whether container is open"
    },
    children: {
      description: "content that is inside the container"
    }
  }
};

export default ContainerViewRightAdapter;

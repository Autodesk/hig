import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

function SpacerAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Spacer" HIGConstructor={HIG.Spacer}>
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.inset}
            setter="setInset"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.type}
            setter="setType"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.width}
            setter="setWidth"
            {...adapterProps}
          />
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

SpacerAdapter.propTypes = {
  inset: PropTypes.oneOf(HIG.Spacer.AvailableSizes),
  type: PropTypes.oneOf(HIG.Spacer.AvailableTypes),
  width: PropTypes.oneOf(HIG.Spacer.AvailableSizes),
  children: PropTypes.node
};

SpacerAdapter.defaultProps = {
  inset: undefined,
  type: undefined,
  width: undefined,
  children: undefined
};

export default SpacerAdapter;

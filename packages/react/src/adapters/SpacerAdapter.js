import React from "react";
import PropTypes from "prop-types";
import { Spacer as VanillaSpacer } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

function SpacerAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Spacer" HIGConstructor={VanillaSpacer}>
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
  inset: PropTypes.oneOf(VanillaSpacer.AvailableSizes),
  type: PropTypes.oneOf(VanillaSpacer.AvailableTypes),
  width: PropTypes.oneOf(VanillaSpacer.AvailableSizes),
  children: PropTypes.node
};

SpacerAdapter.defaultProps = {
  inset: undefined,
  type: undefined,
  width: undefined,
  children: undefined
};

SpacerAdapter.__docgenInfo = {
  props: {
    inset: { description: "inset width of the spacer" },
    type: { description: "type of the spacer ('stack' or 'inline')" },
    width: {
      description:
        "width of the spacer (vertical if type is 'stack', horizontal if type is 'inline'"
    },
    children: { description: "content to render within the spacer" }
  }
};

export default SpacerAdapter;

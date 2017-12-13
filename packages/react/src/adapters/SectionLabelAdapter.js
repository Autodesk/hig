import React from "react";
import PropTypes from "prop-types";

import { SectionLabel as VanillaSectionLabel } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MountsAnyChild } from "./HIGAdapter";

function SectionLabelAdapter(props) {
  return (
    <HIGAdapter
      displayName="SectionLabel"
      HIGConstructor={VanillaSectionLabel}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.label}
            setter="setLabel"
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

SectionLabelAdapter.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node
};

SectionLabelAdapter.__docgenInfo = {
  props: {
    label: {
      description: "{string} label text"
    },
    children: {
      description: "content inside the container"
    }
  }
};

export default SectionLabelAdapter;

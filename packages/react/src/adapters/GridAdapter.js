import React from "react";
import PropTypes from "prop-types";
import { Grid as VanillaGrid } from "hig-vanilla";
import HIGAdapter, { MountsHIGChildList } from "./HIGAdapter";

function GridAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Grid" HIGConstructor={VanillaGrid}>
      {adapterProps => (
        <MountsHIGChildList {...adapterProps}>
          {props.children}
        </MountsHIGChildList>
      )}
    </HIGAdapter>
  );
}

GridAdapter.propTypes = {
  children: PropTypes.node
};

GridAdapter.defaultProps = {
  children: undefined
};

GridAdapter.__docgenInfo = {
  props: {
    children: {
      description: "support adding GridItems"
    }
  }
};

export default GridAdapter;

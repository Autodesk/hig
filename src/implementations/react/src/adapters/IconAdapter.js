import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

function IconAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Icon" HIGConstructor={HIG.Icon}>
      {adapterProps => (
        <MapsPropToMethod
          setter="setNameOrSVG"
          value={props.nameOrSVG}
          {...adapterProps}
        />
      )}
    </HIGAdapter>
  );
}

IconAdapter.propTypes = {
  nameOrSVG: PropTypes.string.isRequired
};

export default IconAdapter;

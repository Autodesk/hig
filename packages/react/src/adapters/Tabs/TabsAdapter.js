import React from "react";
import PropTypes from "prop-types";
import { Tabs } from "hig-vanilla";
import HIGAdaper, { MountsHIGChildList, MapsPropToMethod } from "../HIGAdapter";

export default function TabsAdapter(props) {
  return (
    <HIGAdaper {...props} displayName="Tabs" HIGConstructor={Tabs}>
      {adapterProps => (
        <div>
          <MapsPropToMethod
            setter="setAlignment"
            value={props.align}
            {...adapterProps}
          />
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdaper>
  );
}

TabsAdapter.propTypes = {
  align: PropTypes.oneOf(Tabs.AvailableAlignments)
};

TabsAdapter.defaultProps = {
  align: "center"
};

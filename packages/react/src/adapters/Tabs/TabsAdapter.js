import React from "react";
import { Tabs } from "hig-vanilla";
import HIGAdaper, { MountsHIGChildList } from "../HIGAdapter";

function TabsAdapter(props) {
  return (
    <HIGAdaper {...props} displayName="Tabs" HIGConstructor={Tabs}>
      {adapterProps => (
        <div>
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdaper>
  );
}

export default TabsAdapter;

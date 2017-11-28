import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MountedByHIGParent,
  MountsHIGChildList
} from "../../HIGAdapter";

function TabsAdapter(props) {
  return (
    <HIGAdapter
      displayName="Tabs"
      HIGConstructor={VanillaGlobalNav._partials.SubNav._partials.Tabs}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addTabs" {...adapterProps} />
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

TabsAdapter.propTypes = {
  children: PropTypes.node
};

TabsAdapter.defaultProps = {
  children: undefined
};

export default TabsAdapter;

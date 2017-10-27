import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, {
  MountedByHIGParentList,
  MountsHIGChildList
} from "../../HIGAdapter";

function GroupAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="Group"
      HIGConstructor={
        HIG.GlobalNav._partials.TopNav._partials.Help._partials.Group
      }
    >
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addGroup" {...adapterProps}>
            {props.children}
          </MountedByHIGParentList>
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

GroupAdapter.propTypes = {
  children: PropTypes.node
};

GroupAdapter.defaultProps = {
  children: undefined
};

export default GroupAdapter;

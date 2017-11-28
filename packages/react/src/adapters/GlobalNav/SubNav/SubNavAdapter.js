import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParent,
  MountsHIGChildList
} from "../../HIGAdapter";

function SubNavAdapter(props) {
  return (
    <HIGAdapter
      displayName="SubNav"
      HIGConstructor={VanillaGlobalNav._partials.SubNav}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addSubNav" {...adapterProps} />
          <MapsEventListener
            listener="onModuleIndicatorClick"
            handler={props.onModuleIndicatorClick}
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.moduleIndicatorName}
            setter="setModuleIndicatorName"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.moduleIndicatorIcon}
            setter="setModuleIndicatorIcon"
            {...adapterProps}
          />
          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

SubNavAdapter.propTypes = {
  children: PropTypes.node,
  onModuleIndicatorClick: PropTypes.func,
  moduleIndicatorIcon: PropTypes.string,
  moduleIndicatorName: PropTypes.string
};

SubNavAdapter.defaultProps = {
  children: undefined,
  onModuleIndicatorClick: undefined,
  moduleIndicatorIcon: undefined,
  moduleIndicatorName: undefined
};

export default SubNavAdapter;

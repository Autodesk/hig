import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountsAnyChild,
  MountsHIGChild
} from "../HIGAdapter";
import TopNavAdapter from "./TopNav/TopNavAdapter";
import SideNavAdapter from "./SideNav/SideNavAdapter";
import SubNavAdapter from "./SubNav/SubNavAdapter";
import SideNav from "../../elements/components/GlobalNav/SideNav/SideNav";

function sortChildren(children) {
  return {
    topNav: children.find(child => child.type === TopNavAdapter),
    sideNav: children.find(
      child => child.type === SideNavAdapter || child.type === SideNav
    ),
    subNav: children.find(child => child.type === SubNavAdapter),
    otherChildren: children.filter(
      child =>
        ![TopNavAdapter, SideNavAdapter, SubNavAdapter, SideNav].includes(
          child.type
        )
    )
  };
}

export default function GlobalNavAdapter(props) {
  const { otherChildren, topNav, sideNav, subNav } = sortChildren(
    React.Children.toArray(props.children)
  );

  return (
    <HIGAdapter
      displayName="GlobalNav"
      HIGConstructor={VanillaGlobalNav}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsEventListener
            listener="onHoverOutside"
            handler={props.onHoverOutside}
            {...adapterProps}
          />
          <MapsPropToMethod value={props.sideNavOpen} {...adapterProps}>
            {(instance, value) =>
              value ? instance.showSideNav() : instance.hideSideNav()}
          </MapsPropToMethod>
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {otherChildren}
          </MountsAnyChild>
          <MountsHIGChild {...adapterProps}>{sideNav}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{subNav}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{topNav}</MountsHIGChild>
        </div>
      )}
    </HIGAdapter>
  );
}

GlobalNavAdapter.propTypes = {
  children: PropTypes.node,
  onHoverOutside: PropTypes.func,
  sideNavOpen: PropTypes.bool
};

GlobalNavAdapter.defaultProps = {
  children: undefined,
  onHoverOutside: undefined,
  sideNavOpen: undefined
};

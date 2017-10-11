import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountsAnyChild,
  MountsHIGChild
} from '../HIGAdapter';
import TopNavAdapter from './TopNav/TopNavAdapter';
import SideNavAdapter from './SideNav/SideNavAdapter';
import SubNavAdapter from './SubNav/SubNavAdapter';
import SideNav from '../../elements/components/GlobalNav/SideNav/SideNav';

function sortChildren(children) {
  return {
    topNav: children.find(child => child.type === TopNavAdapter),
    sideNav: children.find(child => child.type === SideNavAdapter || child.type === SideNav),
    subNav: children.find(child => child.type === SubNavAdapter),
    otherChildren: children.filter(child => ![
      TopNavAdapter,
      SideNavAdapter,
      SubNavAdapter,
      SideNav
    ].includes(child.type))
  };
}

export default function GlobalNavAdapter(props) {
  const {
    otherChildren, topNav, sideNav, subNav
  } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter displayName="GlobalNav" HIGConstructor={HIG.GlobalNav} {...props}>{adapterProps => (
      <div>
        <MapsEventListener listener="onHoverOutside" handler={props.onHoverOutside} {...adapterProps} />
        <MapsPropToMethod value={props.sideNavOpen} {...adapterProps}>
          {(instance, value) => { value ? instance.showSideNav() : instance.hideSideNav(); }}
        </MapsPropToMethod>
        <MountsHIGChild {...adapterProps}>{topNav}</MountsHIGChild>
        <MountsHIGChild {...adapterProps}>{subNav}</MountsHIGChild>
        <MountsAnyChild mounter="addSlot" {...adapterProps}>{otherChildren}</MountsAnyChild>
      </div>
    )}
    </HIGAdapter>
  );
}

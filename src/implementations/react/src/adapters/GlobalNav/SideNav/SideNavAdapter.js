import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent,
  MountsAnyChild,
  MountsHIGChild,
  MountsHIGChildList
} from '../../HIGAdapter';

import LinkAdapter from './LinkAdapter';
import SearchAdapter from './SearchAdapter';
import GroupAdapter from './GroupAdapter';
import Search from '../../../elements/components/GlobalNav/SideNav/Search';

function sortChildren(children) {
  return {
    groups: children.filter(child => child.type === GroupAdapter),
    links: children.filter(child => child.type === LinkAdapter),
    search: children.find(child => child.type === SearchAdapter || child.type === Search),
    otherChildren: children.filter(child => ![LinkAdapter, SearchAdapter, Search, GroupAdapter].includes(child.type))
  };
}

export default function SideNavAdapter(props) {
  const {
    groups, links, search, otherChildren
  } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter displayName="SideNav" HIGConstructor={HIG.GlobalNav._partials.SideNav} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addSideNav" {...adapterProps} />
          <MapsEventListener listener="onHeaderClick" handler={props.onHeaderClick} {...adapterProps} />
          <MapsEventListener listener="onSuperHeaderClick" handler={props.onSuperHeaderClick} {...adapterProps} />
          <MapsPropToMethod value={props.headerLabel} setter="setHeaderLabel" {...adapterProps} />
          <MapsPropToMethod value={props.headerLink} setter="setHeaderLink" {...adapterProps} />
          <MapsPropToMethod value={props.superHeaderLabel} setter="setSuperHeaderLabel" {...adapterProps} />
          <MapsPropToMethod value={props.superHeaderLink} setter="setSuperHeaderLink" {...adapterProps} />
          <MapsPropToMethod value={props.copyright} setter="setCopyright" {...adapterProps} />
          <MountsHIGChildList {...adapterProps}>{groups}</MountsHIGChildList>
          <MountsHIGChildList {...adapterProps}>{links}</MountsHIGChildList>
          <MountsHIGChild {...adapterProps}>{search}</MountsHIGChild>
          {otherChildren.length > 0
            ? <MountsAnyChild mounter="addSlot" {...adapterProps}>{otherChildren}</MountsAnyChild>
            : null}
        </div>
      )}
    </HIGAdapter>
  );
}

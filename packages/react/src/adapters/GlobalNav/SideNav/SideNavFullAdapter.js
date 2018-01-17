import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent,
  MountsAnyChild,
  MountsHIGChild,
  MountsHIGChildList
} from "../../HIGAdapter";

import LinkAdapter from "./LinkAdapter";
import SearchAdapter from "./SearchAdapter";
import GroupAdapter from "./GroupAdapter";
import Search from "../../../elements/components/GlobalNav/SideNav/Search";

function sortChildren(children) {
  return {
    groups: children.filter(child => child.type === GroupAdapter),
    links: children.filter(child => child.type === LinkAdapter),
    search: children.find(
      child => child.type === SearchAdapter || child.type === Search
    ),
    otherChildren: children.filter(
      child =>
        ![LinkAdapter, SearchAdapter, Search, GroupAdapter].includes(child.type)
    )
  };
}

export default function SideNavFullAdapter(props) {
  const { groups, links, search, otherChildren } = sortChildren(
    React.Children.toArray(props.children)
  );

  return (
    <HIGAdapter
      displayName="SideNavFull"
      HIGConstructor={VanillaGlobalNav._partials.SideNav._partials.SideNavFull}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addContent" {...adapterProps} />
          <MapsEventListener
            listener="onHeaderClick"
            handler={props.onHeaderClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onSuperHeaderClick"
            handler={props.onSuperHeaderClick}
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.headerLabel}
            setter="setHeaderLabel"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.headerLink}
            setter="setHeaderLink"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.superHeaderLabel}
            setter="setSuperHeaderLabel"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.superHeaderLink}
            setter="setSuperHeaderLink"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.copyright}
            setter="setCopyright"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.showVariantToggleButton}
            {...adapterProps}
          >
            {(instance, value) =>
              value
                ? instance.showVariantToggleButton()
                : instance.hideVariantToggleButton()
            }
          </MapsPropToMethod>
          <MapsEventListener
            listener="onVariantToggleClick"
            handler={props.onVariantToggleClick}
            {...adapterProps}
          />
          {otherChildren.length > 0 ? (
            <MountsAnyChild mounter="addSlot" {...adapterProps}>
              {otherChildren}
            </MountsAnyChild>
          ) : null}
          <MountsHIGChild {...adapterProps}>{search}</MountsHIGChild>
          <MountsHIGChildList {...adapterProps}>{groups}</MountsHIGChildList>
          <MountsHIGChildList {...adapterProps}>{links}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

SideNavFullAdapter.propTypes = {
  children: PropTypes.node,
  copyright: PropTypes.string,
  onHeaderClick: PropTypes.func,
  onSuperHeaderClick: PropTypes.func,
  /**
   * Calls the provided callback when user clicks on the expand button
   */
  onVariantToggleClick: PropTypes.func,
  headerLabel: PropTypes.string,
  superHeaderLabel: PropTypes.string,
  headerLink: PropTypes.string,
  /**
   * Show or hide the collapse button
   */
  showVariantToggleButton: PropTypes.bool,
  superHeaderLink: PropTypes.string
};

SideNavFullAdapter.defaultProps = {
  children: undefined,
  copyright: undefined,
  onHeaderClick: undefined,
  onSuperHeaderClick: undefined,
  headerLabel: undefined,
  superHeaderLabel: undefined,
  headerLink: undefined,
  showVariantToggleButton: true,
  superHeaderLink: undefined
};

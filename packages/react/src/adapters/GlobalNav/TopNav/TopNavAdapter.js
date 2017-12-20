import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent,
  MountsHIGChild
} from "../../HIGAdapter";
import ShortcutAdapter from "./ShortcutAdapter";
import Search from "../../../elements/components/GlobalNav/TopNav/Search";
import Notifications from "../../../elements/components/GlobalNav/TopNav/Notifications";
import ProfileAdapter from "./ProfileAdapter";
import HelpAdapter from "./HelpAdapter";
import ProjectAccountSwitcherAdapter from "./ProjectAccountSwitcherAdapter";
import ProjectAccountSwitcher from "../../../elements/components/GlobalNav/TopNav/ProjectAccountSwitcher"; // eslint-disable-line max-len

function sortChildren(children) {
  return {
    notifications: children.find(child => child.type === Notifications),
    shortcut: children.find(child => child.type === ShortcutAdapter),
    search: children.find(child => child.type === Search),
    profile: children.find(child => child.type === ProfileAdapter),
    help: children.find(child => child.type === HelpAdapter),
    projectAccountSwitcher: children.find(child =>
      [ProjectAccountSwitcher, ProjectAccountSwitcherAdapter].includes(
        child.type
      )
    )
  };
}

function TopNavAdapter(props) {
  const {
    notifications,
    shortcut,
    search,
    profile,
    help,
    projectAccountSwitcher
  } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter
      displayName="TopNav"
      HIGConstructor={VanillaGlobalNav._partials.TopNav}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addTopNav" {...adapterProps} />
          <MapsPropToMethod
            value={props.logo}
            setter="setLogo"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.logoLink}
            setter="setLogoLink"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.hideHamburgerButton}
            setter="hideMenu"
            {...adapterProps}
          />
          <MapsEventListener
            handler={props.onLogoClick}
            listener="onLogoClick"
            {...adapterProps}
          />
          <MapsEventListener
            handler={props.onHamburgerClick}
            listener="onHamburgerClick"
            {...adapterProps}
          />
          <MountsHIGChild {...adapterProps}>{shortcut}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{search}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{profile}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{notifications}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{help}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>
            {projectAccountSwitcher}
          </MountsHIGChild>
        </div>
      )}
    </HIGAdapter>
  );
}

TopNavAdapter.propTypes = {
  children: PropTypes.node,
  hideHamburgerButton: PropTypes.bool,
  logo: PropTypes.string,
  logoLink: PropTypes.string,
  onLogoClick: PropTypes.func,
  onHamburgerClick: PropTypes.func
};

TopNavAdapter.defaultProps = {
  children: undefined,
  hideHamburgerButton: false,
  logo: undefined,
  logoLink: undefined,
  onLogoClick: undefined,
  onHamburgerClick: undefined
};

export default TopNavAdapter;

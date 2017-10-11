import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent,
  MountsHIGChild
} from '../../HIGAdapter';
import ShortcutAdapter from './ShortcutAdapter';
import SearchAdapter from './SearchAdapter';
import ProfileAdapter from './ProfileAdapter';
import HelpAdapter from './HelpAdapter';
import ProjectAccountSwitcherAdapter from './ProjectAccountSwitcherAdapter';
import ProjectAccountSwitcher from '../../../elements/components/GlobalNav/TopNav/ProjectAccountSwitcher';

function sortChildren(children) {
  return {
    shortcut: children.find(child => child.type === ShortcutAdapter),
    search: children.find(child => child.type === SearchAdapter),
    profile: children.find(child => child.type === ProfileAdapter),
    help: children.find(child => child.type === HelpAdapter),
    projectAccountSwitcher: children.find(child => [ProjectAccountSwitcher, ProjectAccountSwitcherAdapter].includes(child.type)),
  };
}

function TopNavAdapter(props) {
  const {
    shortcut,
    search,
    profile,
    help,
    projectAccountSwitcher
  } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter displayName="TopNav" HIGConstructor={HIG.GlobalNav._partials.TopNav} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addTopNav" {...adapterProps} />
          <MapsPropToMethod value={props.logo} setter="setLogo" {...adapterProps} />
          <MapsPropToMethod value={props.logoLink} setter="setLogoLink" {...adapterProps} />
          <MapsEventListener handler={props.onLogoClick} listener="onLogoClick" {...adapterProps} />
          <MapsEventListener handler={props.onHamburgerClick} listener="onHamburgerClick" {...adapterProps} />
          <MountsHIGChild {...adapterProps}>{shortcut}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{search}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{profile}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{help}</MountsHIGChild>
          <MountsHIGChild {...adapterProps}>{projectAccountSwitcher}</MountsHIGChild>
        </div>
      )}
    </HIGAdapter>
  );
}

export default TopNavAdapter;

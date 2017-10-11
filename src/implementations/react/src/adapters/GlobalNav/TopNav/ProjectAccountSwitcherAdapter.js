import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MountedByHIGParent,
  MapsPropToMethod,
  MapsEventListener,
  MountsHIGChildList
} from '../../HIGAdapter';
import ProjectAdapter from './ProjectAdapter';
import AccountAdapter from './AccountAdapter';
import Project from '../../../elements/components/GlobalNav/TopNav/Project';
import Account from '../../../elements/components/GlobalNav/TopNav/Account';

function sortChildren(children) {
  return {
    projects: children.filter(child => [ProjectAdapter, Project].includes(child.type)),
    accounts: children.filter(child => [AccountAdapter, Account].includes(child.type)),
  };
}

function ProjectAccountSwitcherAdapter(props) {
  const { projects, accounts } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter displayName="ProjectAccountSwitcher" HIGConstructor={HIG.GlobalNav._partials.TopNav._partials.ProjectAccountSwitcher} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addProjectAccountSwitcher" {...adapterProps} />
          <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
          <MapsEventListener listener="onClickOutside" handler={props.onClickOutside} {...adapterProps} />
          <MapsPropToMethod setter="setProjectTitle" value={props.projectTitle} {...adapterProps} />
          <MapsPropToMethod setter="setAccountTitle" value={props.accountTitle} {...adapterProps} />
          <MapsPropToMethod setter="setActiveImage" value={props.activeImage} {...adapterProps} />
          <MapsPropToMethod setter="setActiveLabel" value={props.activeLabel} {...adapterProps} />
          <MapsPropToMethod setter="setActiveType" value={props.activeType} {...adapterProps} />
          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => { value ? instance.open() : instance.close(); }}
          </MapsPropToMethod>
          <MapsPropToMethod value={props.showCaret} {...adapterProps}>
            {(instance, value) => { value ? instance.showCaret() : instance.hideCaret(); }}
          </MapsPropToMethod>
          <MountsHIGChildList {...adapterProps}>{projects}</MountsHIGChildList>
          <MountsHIGChildList {...adapterProps}>{accounts}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

ProjectAccountSwitcherAdapter.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  clearIconVisible: PropTypes.bool,
  onClearIconClick: PropTypes.func,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default ProjectAccountSwitcherAdapter;

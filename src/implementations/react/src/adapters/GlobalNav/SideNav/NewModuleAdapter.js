import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParentList,
  MountsHIGChild,
  MountsHIGChildList
} from '../../HIGAdapter';

import CollapseAdapter from './NewCollapseAdapter';
import Collapse from '../../../elements/components/GlobalNav/SideNav/ModuleCollapse';
import SubmoduleAdapter from './NewSubmoduleAdapter';
import Submodule from '../../../elements/components/GlobalNav/SideNav/Submodule';

function sortChildren(children) {
  return {
    collapse: children.find(child => [CollapseAdapter, Collapse].includes(child.type)),
    submodules: children.filter(child => [SubmoduleAdapter, Submodule].includes(child.type))
  }
}

function ModuleAdapter(props) {
  const { collapse, submodules } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter name="Module" HIGConstructor={HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module} {...props}>{(adapterProps) => (
      <div>
        <MountedByHIGParentList mounter="addModule" {...adapterProps} />
        <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
        <MapsEventListener listener="onHover" handler={props.onHover} {...adapterProps} />
        <MapsPropToMethod value={props.icon} setter="setIcon" {...adapterProps} />
        <MapsPropToMethod value={props.link} setter="setLink" {...adapterProps} />
        <MapsPropToMethod value={props.title} setter="setTitle" {...adapterProps} />
        <MapsPropToMethod value={props.active} {...adapterProps}>
          {(instance, value) => value ? instance.activate() : instance.deactivate()}
        </MapsPropToMethod>
        <MountsHIGChild {...adapterProps}>{collapse}</MountsHIGChild>
        <MountsHIGChildList {...adapterProps}>{submodules}</MountsHIGChildList>
      </div>
    )}</HIGAdapter>
  );
}

ModuleAdapter.defaultProps = {
  children: []
}

export default ModuleAdapter;


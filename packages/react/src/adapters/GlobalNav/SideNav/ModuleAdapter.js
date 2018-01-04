import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParentList,
  MountsHIGChild,
  MountsHIGChildList
} from "../../HIGAdapter";

import CollapseAdapter from "./CollapseAdapter";
import Collapse from "../../../elements/components/GlobalNav/SideNav/ModuleCollapse";
import SubmoduleAdapter from "./SubmoduleAdapter";
import Submodule from "../../../elements/components/GlobalNav/SideNav/Submodule";

function sortChildren(children) {
  return {
    collapse: children.find(child =>
      [CollapseAdapter, Collapse].includes(child.type)
    ),
    submodules: children.filter(child =>
      [SubmoduleAdapter, Submodule].includes(child.type)
    )
  };
}

function ModuleAdapter(props) {
  const { collapse, submodules } = sortChildren(
    React.Children.toArray(props.children)
  );

  return (
    <HIGAdapter
      displayName="Module"
      HIGConstructor={
        VanillaGlobalNav._partials.SideNav._partials.Group._partials.Module
      }
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addModule" {...adapterProps} />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onHover"
            handler={props.onHover}
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.icon}
            setter="setIcon"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.link}
            setter="setLink"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.title}
            setter="setTitle"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.target}
            setter="setTarget"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.active} {...adapterProps}>
            {(instance, value) =>
              value ? instance.activate() : instance.deactivate()
            }
          </MapsPropToMethod>
          <MountsHIGChild {...adapterProps}>{collapse}</MountsHIGChild>
          {submodules.length > 0 ? (
            <MountsHIGChildList {...adapterProps}>
              {submodules}
            </MountsHIGChildList>
          ) : null}
        </div>
      )}
    </HIGAdapter>
  );
}

ModuleAdapter.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

ModuleAdapter.defaultProps = {
  children: [],
  icon: undefined,
  link: undefined,
  title: undefined,
  active: undefined,
  onClick: undefined,
  onHover: undefined
};

export default ModuleAdapter;

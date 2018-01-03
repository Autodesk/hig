import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParentList
} from "../../HIGAdapter";

function SubmoduleAdapter(props) {
  return (
    <HIGAdapter
      displayName="Submodule"
      HIGConstructor={
        VanillaGlobalNav._partials.SideNav._partials.Group._partials.Module
          ._partials.Submodule
      }
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addSubmodule" {...adapterProps} />
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
          <MapsPropToMethod value={props.show} setter="show" {...adapterProps}>
            {(instance, value) => (value ? instance.show() : instance.hide())}
          </MapsPropToMethod>
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
          <MapsPropToMethod value={props.active} {...adapterProps}>
            {(instance, value) =>
              value ? instance.activate() : instance.deactivate()}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

SubmoduleAdapter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  link: PropTypes.string,
  show: PropTypes.bool,
  title: PropTypes.string
};

SubmoduleAdapter.defaultProps = {
  active: undefined,
  onClick: undefined,
  onHover: undefined,
  link: undefined,
  show: true,
  title: undefined
};

export default SubmoduleAdapter;

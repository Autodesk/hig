import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParentList
} from "../../HIGAdapter";

function LinkAdapter(props) {
  return (
    <HIGAdapter
      displayName="Link"
      HIGConstructor={VanillaGlobalNav._partials.SideNav._partials.Link}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.link}
            setter="setLink"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.target}
            setter="setTarget"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.title}
            setter="setTitle"
            {...adapterProps}
          />
          <MapsEventListener
            handler={props.onClick}
            listener="onClick"
            {...adapterProps}
          />
          <MapsEventListener
            handler={props.onHover}
            listener="onHover"
            {...adapterProps}
          />
          <MountedByHIGParentList mounter="addLink" {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

LinkAdapter.propTypes = {
  link: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

export default LinkAdapter;

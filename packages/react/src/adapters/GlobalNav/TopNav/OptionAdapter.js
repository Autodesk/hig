import React from "react";
import PropTypes from "prop-types";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod
} from "../../HIGAdapter";
import MountedByHIGParentList from "../../HIGAdapter/MountedByHIGParentList";

function OptionAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="Option"
      HIGConstructor={
        VanillaGlobalNav._partials.TopNav._partials.Help._partials.Option
      }
    >
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addOption" {...adapterProps} />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setName"
            value={props.name}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setLink"
            value={props.link}
            {...adapterProps}
          />
        </div>
      )}
    </HIGAdapter>
  );
}

OptionAdapter.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  link: PropTypes.string
};

OptionAdapter.defaultProps = {
  onClick: undefined,
  name: undefined,
  link: undefined
};

export default OptionAdapter;

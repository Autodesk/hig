import React from "react";
import PropTypes from "prop-types";
import { Option as VanillaOption } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParentList
} from "../HIGAdapter";

function OptionAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Option" HIGConstructor={VanillaOption}>
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.label}
            setter="setLabel"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.value}
            setter="setValue"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.selected} {...adapterProps}>
            {(instance, value) =>
              value ? instance.select() : instance.deselect()
            }
          </MapsPropToMethod>

          <MapsPropToMethod value={props.checked} {...adapterProps}>
            {(instance, value) =>
              value ? instance.check() : instance.uncheck()
            }
          </MapsPropToMethod>
          <MapsPropToMethod value={props.focused} {...adapterProps}>
            {(instance, value) =>
              value ? instance.focus() : instance.unfocus()
            }
          </MapsPropToMethod>
          <MapsEventListener
            listener="onHover"
            handler={props.onHover}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MountedByHIGParentList mounter="addOption" {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

OptionAdapter.propTypes = {
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
  selected: PropTypes.bool,
  value: PropTypes.string
};

OptionAdapter.defaultProps = {
  onHover: undefined,
  onClick: undefined,
  label: undefined,
  selected: undefined,
  value: undefined
};

OptionAdapter.__docgenInfo = {
  props: {
    onHover: {
      description: "called when user moves mouse over the option"
    },
    onClick: {
      description: "called when the user clicks the option"
    },
    label: {
      description: "text displayed on the option"
    },
    selected: {
      description: "indicates the option is currently selected"
    },
    value: {
      description: "data represented by the option"
    }
  }
};

export default OptionAdapter;

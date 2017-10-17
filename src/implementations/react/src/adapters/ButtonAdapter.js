import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod, MapsEventListener } from "./HIGAdapter";

function ButtonAdapter(props) {
  return (
    <HIGAdapter displayName="Button" HIGConstructor={HIG.Button} {...props}>
      {adapterProps => (
        <div>
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
            value={props.target}
            setter="setTarget"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.title}
            setter="setTitle"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.type}
            setter="setType"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.size}
            setter="setSize"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.width}
            setter="setWidth"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.disabled} {...adapterProps}>
            {(instance, value) =>
              value ? instance.disable() : instance.enable()}
          </MapsPropToMethod>
          <MapsEventListener
            listener="onBlur"
            handler={props.onBlur}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onFocus"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onHover"
            handler={props.onHover}
            {...adapterProps}
          />
        </div>
      )}
    </HIGAdapter>
  );
}

ButtonAdapter.propTypes = {
  disabled: PropTypes.bool,
  link: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func,
  size: PropTypes.oneOf(HIG.Button.AvailableSizes),
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(HIG.Button.AvailableTypes),
  width: PropTypes.oneOf(HIG.Button.AvailableWidths),
  icon: PropTypes.string
};

ButtonAdapter.defaultProps = {
  disabled: false,
  link: undefined,
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
  onHover: undefined,
  size: undefined,
  target: undefined,
  type: undefined,
  width: undefined,
  icon: undefined
};

ButtonAdapter.__docgenInfo = {
  props: {
    disabled: { description: "prevents user action on the button" },
    icon: { description: "an icon name or svg string" },
    link: { description: "sets the link of a button" },
    onBlur: {
      description: "triggers blur when focuss is moved away from icon"
    },
    onClick: { description: "triggers when you click the button" },
    onFocus: { description: "triggers focus is moved to button" },
    onHover: { description: "triggers when you hover over the button" },
    size: { description: "specifies size of button" },
    target: { description: "specifies where to display the linked URL" },
    title: { description: "sets the title of a button" },
    type: { description: "specifies type of button" },
    width: { description: "specifies width of button (grow or shrink)" }
  }
};

export default ButtonAdapter;

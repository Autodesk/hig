import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";

import HIGAdapter, { MapsPropToMethod, MapsEventListener } from "./HIGAdapter";

function IconButtonAdapter(props) {
  return (
    <HIGAdapter
      displayName="IconButton"
      HIGConstructor={HIG.IconButton}
      {...props}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.title}
            setter="setTitle"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.link}
            setter="setLink"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.icon}
            setter="setIcon"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.disabled} {...adapterProps}>
            {(instance, value) =>
              value ? instance.disable() : instance.enable()}
          </MapsPropToMethod>
          <MapsEventListener
            listener="onClick"
            handler={props.onBlur}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onHover"
            handler={props.onHover}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onFocus"
            handler={props.onFocus}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onBlur"
            handler={props.onBlur}
            {...adapterProps}
          />
        </div>
      )}
    </HIGAdapter>
  );
}

IconButtonAdapter.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func
};

IconButtonAdapter.defaultProps = {
  link: undefined,
  disabled: false,
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
  onHover: undefined
};

IconButtonAdapter.__docgenInfo = {
  props: {
    title: {
      description: "title of the button for accessibility purposes"
    },
    link: {
      description: "url button will navigate to when clicked"
    },
    icon: {
      description: "name of an included icon, or svg string of a custom icon"
    },
    disabled: {
      description: "prevents user actions on the button"
    },
    onBlur: {
      description: "called when user moves focus away from the button"
    },
    onClick: {
      description: " called when user clicks the button"
    },
    onFocus: {
      description: "called when user moves focus onto the button"
    },
    onHover: {
      description: "called when user moves the mouse over the button"
    }
  }
};

export default IconButtonAdapter;

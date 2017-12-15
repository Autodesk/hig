import React from "react";
import PropTypes from "prop-types";

import { Flyout as VanillaFlyout } from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountsAnyChild
} from "./HIGAdapter";

function FlyoutAdapter(props) {
  return (
    <HIGAdapter displayName="Flyout" HIGConstructor={VanillaFlyout} {...props}>
      {adapterProps => (
        <div>
          <MapsPropToMethod
            value={props.anchorPoint}
            setter="setAnchorPoint"
            {...adapterProps}
          />
          <MapsPropToMethod
            value={props.maxHeight}
            setter="setMaxHeight"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => (value ? instance.open() : instance.close())}
          </MapsPropToMethod>
          <MapsEventListener
            listener="onClickOutside"
            handler={props.onClickOutside}
            {...adapterProps}
          />
          <MountsAnyChild mounter="addTarget" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
          <MountsAnyChild mounter="addSlot" {...adapterProps}>
            {props.content}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

FlyoutAdapter.propTypes = {
  anchorPoint: PropTypes.oneOf(VanillaFlyout.AvailableAnchorPoints),
  onClickOutside: PropTypes.func,
  open: PropTypes.bool,
  content: PropTypes.node,
  children: PropTypes.node,
  maxHeight: PropTypes.number
};

FlyoutAdapter.defaultProps = {
  anchorPoint: undefined,
  onClickOutside: undefined,
  open: undefined,
  content: undefined,
  children: undefined
};

export default FlyoutAdapter;

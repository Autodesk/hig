import React from 'react';
import PropTypes from 'prop-types';

import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountsAnyChild
} from './HIGAdapter';

function FlyoutAdapter(props) {
  return (
    <HIGAdapter displayName="Flyout" HIGConstructor={HIG.Flyout} {...props}>{(adapterProps) => (
      <div>
        <MapsPropToMethod value={props.anchorPoint} setter="setAnchorPoint" {...adapterProps} />
        <MapsPropToMethod value={props.open} {...adapterProps}>
          {(instance, value) => value ? instance.open() : instance.close() }
        </MapsPropToMethod>
        <MapsEventListener listener="onClickOutside" handler={props.onClickOutside} {...adapterProps} />
        <MountsAnyChild mounter="addTarget" {...adapterProps}>{props.children}</MountsAnyChild>
        <MountsAnyChild mounter="addSlot" {...adapterProps}>{props.content}</MountsAnyChild>
      </div>
    )}</HIGAdapter>
  );
}

FlyoutAdapter.propTypes = {
  anchorPoint: PropTypes.oneOf(HIG.Flyout.AvailableAnchorPoints),
  onClickOutside: PropTypes.func,
  open: PropTypes.bool,
  target: PropTypes.any,
  children: PropTypes.node
};

export default FlyoutAdapter;

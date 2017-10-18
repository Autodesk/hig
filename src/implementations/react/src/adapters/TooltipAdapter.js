import React from 'react';
import PropTypes from 'prop-types';

import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountsAnyChild
} from './HIGAdapter';

function TooltipAdapter(props) {
  return (
    <HIGAdapter displayName="Tooltip" HIGConstructor={HIG.Tooltip} {...props}>{(adapterProps) => (
      <div>
        <MapsPropToMethod value={props.anchorPoint} setter="setAnchorPoint" {...adapterProps} />
        <MapsPropToMethod value={props.content} setter="setContent" {...adapterProps} />
        <MapsPropToMethod value={props.open} {...adapterProps}>
          {(instance, value) => value ? instance.open() : instance.close() }
        </MapsPropToMethod>
        <MapsEventListener listener="onClickOutside" handler={props.onClickOutside} {...adapterProps} />
        <MountsAnyChild mounter="addTarget" {...adapterProps}>{props.children}</MountsAnyChild>
      </div>
    )}</HIGAdapter>
  );
}

TooltipAdapter.propTypes = {
  anchorPoint: PropTypes.oneOf(HIG.Tooltip.AvailableAnchorPoints),
  onClickOutside: PropTypes.func,
  open: PropTypes.bool,
  target: PropTypes.any,
  content: PropTypes.string,
  children: PropTypes.node
};

export default TooltipAdapter;

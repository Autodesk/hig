import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod,
  MapsEventListener,
  MountedByHIGParent,
  MountsHIGChildList
} from '../../HIGAdapter';

function HelpAdapter(props) {
  return (
    <HIGAdapter displayName="Help" HIGConstructor={HIG.GlobalNav._partials.TopNav._partials.Help} {...props}>
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addHelp" {...adapterProps} />
          <MapsEventListener handler={props.onClick} listener="onClick" {...adapterProps} />
          <MapsEventListener handler={props.onClickOutside} listener="onClickOutside" {...adapterProps} />
          <MapsPropToMethod value={props.title} setter="setTitle" {...adapterProps} />
          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => (value ? instance.open() : instance.close())}
          </MapsPropToMethod>
          <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

HelpAdapter.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};

export default HelpAdapter;

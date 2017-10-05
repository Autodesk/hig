import React from 'react';
import * as HIG from 'hig-vanilla'

import HIGAdapter, { MapsPropToMethod, MapsEventListener } from './HIGAdapter';

function NewIconButtonAdapter(props) {
  return (
    <HIGAdapter name="IconButton" HIGConstructor={HIG.IconButton} {...props}>{(adapterProps) => (
        <div>
          <MapsPropToMethod value={props.title} setter={"setTitle"} {...adapterProps} />
          <MapsPropToMethod value={props.link} setter={"setLink"} {...adapterProps} />
          <MapsPropToMethod value={props.icon} setter={"setIcon"} {...adapterProps} />
          <MapsPropToMethod value={props.disabled} {...adapterProps}>
            {(instance, value) => value ? instance.disable() : instance.enable() }
          </MapsPropToMethod>
          <MapsEventListener listener="onClick" handler={props.onBlur}  {...adapterProps} />
          <MapsEventListener listener="onHover" handler={props.onHover}  {...adapterProps} />
          <MapsEventListener listener="onFocus" handler={props.onFocus}  {...adapterProps} />
          <MapsEventListener listener="onBlur" handler={props.onBlur}  {...adapterProps} />
        </div>
    )}</HIGAdapter>
  );
}

export default NewIconButtonAdapter
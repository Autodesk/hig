import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { MapsPropToMethod, MapsEventListener } from './HIGAdapter';

function NewButtonAdapter(props) {
  return (
    <HIGAdapter name="Button" HIGConstructor={HIG.Button} {...props}>{(adapterProps) => (
      <div>
        <MapsPropToMethod value={props.icon} setter="setIcon" {...adapterProps} />
        <MapsPropToMethod value={props.link} setter="setLink" {...adapterProps} />
        <MapsPropToMethod value={props.target} setter="setTarget" {...adapterProps} />
        <MapsPropToMethod value={props.title} setter="setTitle" {...adapterProps} />
        <MapsPropToMethod value={props.type} setter="setType" {...adapterProps} />
        <MapsPropToMethod value={props.size} setter="setSize" {...adapterProps} />
        <MapsPropToMethod value={props.width} setter="setWidth" {...adapterProps} />
        <MapsPropToMethod value={props.disabled} {...adapterProps}>
          {(instance, value) => value ? instance.disable() : instance.enable() }
        </MapsPropToMethod>
        <MapsEventListener listener="onBlur" handler={props.onBlur} {...adapterProps} />
        <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
        <MapsEventListener listener="onFocus" handler={props.onFocus} {...adapterProps} />
        <MapsEventListener listener="onHover" handler={props.onHover} {...adapterProps} />
      </div>
    )}</HIGAdapter>
  );
}

export default NewButtonAdapter;
 
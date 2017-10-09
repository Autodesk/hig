import React from 'react' 
import * as HIG from 'hig-vanilla'

import HIGAdapter, { MapsPropToMethod, MapsEventListener, MountedByHIGParentList } from './HIGAdapter'

function TextHeadCellAdapter (props) {
  return (
    <HIGAdapter displayName="TextHeadCell" HIGConstructor={HIG.Table._partials.TableHead._partials.TextHeadCell} {...props}>{(adapterProps) => (
      <div>
        <MountedByHIGParentList mounter="addCell" {...adapterProps} />
         <MapsPropToMethod value={props.text} setter="setText" {...adapterProps} />
        <MapsPropToMethod value={props.detail} setter="setDetail" {...adapterProps} />
        <MapsPropToMethod value={props.alignment} setter="setAlignment" {...adapterProps} /> 
        <MapsPropToMethod value={props.width} setter="setWidth" {...adapterProps} />   
      </div>
    )}</HIGAdapter>
  )   
}


export default TextHeadCellAdapter
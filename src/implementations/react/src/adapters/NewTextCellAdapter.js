import React from 'react' 
import * as HIG from 'hig-vanilla'

import HIGAdapter, { MapsPropToMethod, MapsEventListener } from './HIGAdapter'

function NewTextCellAdapter (props) {
  return (
    <HIGAdapter displayName="TextCell" HIGConstructor={HIG.Table._partials.TableRow._partials.TextCell} {...props}>{(adapterProps) => (
      <div>
        <MapsPropToMethod value={props.text} setter="setText" {...adapterProps} />
        <MapsPropToMethod value={props.detail} setter="setDetail" {...adapterProps} />
        <MapsPropToMethod value={props.alignment} setter="setAlignment" {...adapterProps} />  
      </div>
    )}</HIGAdapter>
  )   
}


export default NewTextCellAdapter
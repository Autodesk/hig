import React from 'react' 
import * as HIG from 'hig-vanilla'

import HIGAdapter, { MapsPropToMethod } from './HIGAdapter'

function NewTextCellContentAdapter (props) {
  return (
    <HIGAdapter displayName="TextCellContent" HIGConstructor={HIG.TextCellContent} {...props}>{(adapterProps) => (
      <div>
        <MapsPropToMethod value={props.text} setter="setText" {...adapterProps} />
        <MapsPropToMethod value={props.detail} setter="setDetail" {...adapterProps} />
        <MapsPropToMethod value={props.alignment} setter="setAlignment" {...adapterProps} />  
      </div>
    )}</HIGAdapter>
  )   
}


export default NewTextCellContentAdapter
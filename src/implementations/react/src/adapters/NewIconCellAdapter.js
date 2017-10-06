import React from 'react'
import * as HIG from 'hig-vanilla'

import HIGAdapter, { MapsPropToMethod, MapsEventListener } from './HIGAdapter'

function NewIconCellAdapter(props) {
  return (
    <HIGAdapter displayName="IconCell" HIGConstructor={HIG.Table._partials.TableRow._partials.IconCell} {...props}>{(adapterProps) => (
      <div>
        <MapsPropToMethod value={props.icon} setter={"setIcon"} {...adapterProps} />  
      </div>
    )}
    </HIGAdapter>
  )
}

export default NewIconCellAdapter

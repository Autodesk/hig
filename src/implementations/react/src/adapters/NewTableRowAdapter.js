import React from 'react'
import * as HIG from 'hig-vanilla'

import HIGAdapter, { 
  MapsPropToMethod, 
  MountedByHIGParent,
  MountsHIGChildList 
} from './HIGAdapter'

function NewTableRowAdapter(props) {
  return(
    <HIGAdapter displayName="TableRow" HIGConstructor={HIG.Table._partials.TableRow} {...props}>
      {(adapterProps) => (
        <div> 
          <MapsPropToMethod value={props.selected} {...adapterProps} >
            {(instance, value) => value ? instance.select() : instance.deselect()}
          </MapsPropToMethod>  
          <MountedByHIGParent mounter="addTableRow" {...adapterProps} /> 
          <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter> 
  )
}

export default NewTableRowAdapter;

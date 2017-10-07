import React from 'react'
import * as HIG from 'hig-vanilla'

import HIGAdapter, { 
  MapsPropToMethod, 
  MountedByHIGParent,
  MountsHIGChildList 
} from './HIGAdapter'

function NewTableHeadAdapter(props) {
  return(
    <HIGAdapter displayName="TableHead" HIGConstructor={HIG.Table._partials.TableHead} {...props}>
      {(adapterProps) => (
        <div> 
          <MountedByHIGParent mounter="addTableHead" {...adapterProps} /> 
          <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        </div>
      )}
    </HIGAdapter> 
  )
}

export default NewTableHeadAdapter;

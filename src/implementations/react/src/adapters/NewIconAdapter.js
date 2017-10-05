import React from 'react';
import HIGAdapter, {
  MapsPropToMethod
} from './HIGAdapter';
import * as HIG from 'hig-vanilla';

function IconAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Icon" HIGConstructor={HIG.Icon}>
      {adapterProps => (
        <MapsPropToMethod setter="setNameOrSVG" value={props.nameOrSVG} {...adapterProps} />
      )}
    </HIGAdapter>
  );
}

export default IconAdapter;

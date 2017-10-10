import React from 'react';
import PropTypes from 'prop-types';
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

IconAdapter.propTypes = {
  nameOrSVG: PropTypes.string
}

export default IconAdapter;

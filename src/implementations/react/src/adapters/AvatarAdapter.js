import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsPropToMethod
} from './HIGAdapter';

function AvatarAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Avatar" HIGConstructor={HIG.Avatar}>
      {adapterProps => (
        <div>
          <MapsPropToMethod setter="setName" value={props.name} {...adapterProps} />
          <MapsPropToMethod setter="setSize" value={props.size} {...adapterProps} />
          <MapsPropToMethod setter="setImage" value={props.image} {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

AvatarAdapter.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(HIG.Avatar.AvailableSizes).isRequired,
  image: PropTypes.string
};

AvatarAdapter.defaultProps = {
  image: undefined
};

export default AvatarAdapter;

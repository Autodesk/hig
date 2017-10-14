import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MountedByHIGParent,
  MapsPropToMethod,
  MapsEventListener
} from '../../HIGAdapter';

function ProfileAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="Profile"
      HIGConstructor={HIG.GlobalNav._partials.TopNav._partials.Profile}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addProfile" {...adapterProps} />
          <MapsEventListener
            listener="onSignOutClick"
            handler={props.onSignOutClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onProfileSettingsClick"
            handler={props.onProfileSettingsClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onProfileImageClick"
            handler={props.onProfileImageClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onProfileClickOutside"
            handler={props.onProfileClickOutside}
            {...adapterProps}
          />
          <MapsPropToMethod setter="setImage" value={props.image} {...adapterProps} />
          <MapsPropToMethod setter="setName" value={props.name} {...adapterProps} />
          <MapsPropToMethod
            setter="setProfileSettingsLabel"
            value={props.profileSettingsLabel}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setProfileSettingsLink"
            value={props.profileSettingsLink}
            {...adapterProps}
          />
          <MapsPropToMethod setter="setSignOutLabel" value={props.signOutLabel} {...adapterProps} />
          <MapsPropToMethod setter="setSignOutLink" value={props.signOutLink} {...adapterProps} />
          <MapsPropToMethod setter="setEmail" value={props.email} {...adapterProps} />
          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => (value ? instance.open() : instance.close())}
          </MapsPropToMethod>
        </div>
      )}
    </HIGAdapter>
  );
}

ProfileAdapter.propTypes = {
  email: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  profileSettingsLabel: PropTypes.string,
  profileSettingsLink: PropTypes.string,
  signOutLabel: PropTypes.string,
  signOutLink: PropTypes.string,
  open: PropTypes.bool,
  onSignOutClick: PropTypes.func,
  onProfileSettingsClick: PropTypes.func,
  onProfileImageClick: PropTypes.func,
  onProfileClickOutside: PropTypes.func
};

ProfileAdapter.defaultProps = {
  email: undefined,
  image: undefined,
  name: undefined,
  profileSettingsLabel: undefined,
  profileSettingsLink: undefined,
  signOutLabel: undefined,
  signOutLink: undefined,
  open: undefined,
  onSignOutClick: undefined,
  onProfileSettingsClick: undefined,
  onProfileImageClick: undefined,
  onProfileClickOutside: undefined
};

export default ProfileAdapter;

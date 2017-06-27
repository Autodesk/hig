/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import * as PropTypes from 'prop-types';
import HIGElement from '../../../HIGElement';
import createComponent from '../../../../adapters/createComponent';

export class Profile extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    ['openProfile', 'closeProfile'].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    this.processUpdateProps(updatePayload)
      .mapToHIGFunctions({
        email: 'setEmail',
        image: 'setImage',
        name: 'setName',
        profileSettingsLink: 'setProfileSettingsLink',
        profileSettingsLabel: 'setProfileSettingsLabel',
        signOutLabel: 'setSignOutLabel',
        signOutLink: 'setSignOutLink'
      })
      .mapToHIGEventListeners([
        'onSignOutClick',
        'onProfileSettingsClick',
        'onProfileImageClick',
        'onProfileClickOutside'
      ])
      .handle('open', value => {
        value ? this.hig.open() : this.hig.close();
      });
  }

  componentDidMount() {
    if (this.initialProps.open === true) {
      this.hig.open();
    }
    this.hig.onProfileImageClick(this.openProfile);
    this.hig.onProfileClickOutside(this.closeProfile);
  }

  openProfile() {
    this.hig.open();
  }

  closeProfile() {
    this.hig.close();
  }
}

const ProfileComponent = createComponent(Profile);

ProfileComponent.propTypes = {
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

ProfileComponent.__docgenInfo = {
  props: {
    open: {
      description: '{bool} sets whether flyout is open or closed'
    },
    name: {
      description: 'sets {String} display name'
    },
    email: {
      description: 'sets {String} email'
    },
    image: {
      description: 'sets {String} image - url to svg or other image object'
    },
    signOutLabel: {
      description: 'sets {String} label for sign out button'
    },
    signOutLink: {
      description: 'sets {String} URL for sign out button'
    },
    profileSettingsLabel: {
      description: 'sets {String} label for settings button'
    },
    profileSettingsLink: {
      description: 'sets {String} url to settings page'
    },
    onProfileSettingsClick: {
      description: '{function} Triggered when user clicks profile settings link'
    },
    onSignOutClick: {
      description: '{function} Triggered when user clicks sign out button'
    },
    onProfileImageClick: {
      description: '{function} triggers when you click the profile'
    },
    onProfileClickOutside: {
      description: '{function} triggers when you click anywhere but the profile flyout'
    }
  }
};

export default ProfileComponent;

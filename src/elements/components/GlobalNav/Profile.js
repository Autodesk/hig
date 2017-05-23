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
import HIGElement from '../../HIGElement';
import createComponent from '../../../adapters/createComponent';

export class Profile extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = {
      image: 'setImage'
    };

    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      if (mapping[propKey]) {
        this.hig[mapping[propKey]](propValue);
      } else {
        this.commitPropChange(propKey, propValue);
      }
    }
  }
}

const ProfileComponent = createComponent(Profile);

ProfileComponent.propTypes = {
  image: PropTypes.string,
  onProfileImageClick: PropTypes.func
};

ProfileComponent.__docgenInfo = {
  props: {
    onProfileImageClick: {
      description: 'triggers when you click the profile'
    },

    image: {
      description: 'sets {String} image - url to svg or other image object'
    }
  }
};

export default ProfileComponent;

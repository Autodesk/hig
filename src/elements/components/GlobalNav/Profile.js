import * as HIG from 'hig.web';
import * as PropTypes from 'prop-types';

import HIGElement from '../../HIGElement';
import HIGChildValidator from '../../HIGChildValidator';
import createComponent from '../../../adapters/createComponent';


class Profile extends HIGElement{
  constructor(initialProps) {
    super(HIG.Profile, initialProps);
  }

  commitUpdate(updatePayload, oldProps, newProp) {

    const mapping = {
      image: 'setImage'
    }

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
  onClick: PropTypes.func,
};

ProfileComponent.__docgenInfo = {
  props: {
    onClick: {
      description: 'triggers when you click the profile'
    },

    image: {
      description: "sets {String} image - url to svg or other image object"
    }
  }
};


export default ProfileComponent;
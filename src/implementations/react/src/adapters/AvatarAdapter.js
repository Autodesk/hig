import * as HIG from 'hig-vanilla';

import HIGElement from '../elements/HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from './createComponent';

export class AvatarAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Avatar, initialProps);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        
        case 'name': {
          this.hig.setName(propValue);
          break;
        }
        case 'size': {
          this.hig.setSize(propValue);
          break;
        }
        case 'image': {
          this.hig.setImage(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const AvatarComponent = createComponent(AvatarAdapter);

AvatarComponent.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string
};

AvatarComponent.__docgenInfo = {
  props: {
    name: {
      description: 'sets the name and initials of an avatar'
    },
    size: {
      description: 'sets the size of an avatar, either small, medium, large or extralarge, defaults to large'
    },
    image: {
      description: 'url to image of an avatar'
    }
  }
};

export default AvatarComponent;

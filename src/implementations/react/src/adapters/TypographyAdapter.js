import * as HIG from 'hig-vanilla';
import * as PropTypes from 'prop-types';

import HIGElement from '../elements/HIGElement';
import createComponent from './createComponent';

class TypographyAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Typography, initialProps)
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];
      switch (propKey) {
        case 'type': {
          this.hig.setType(propValue);
          break;
        }
        case 'text': {
          this.hig.setText(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const TypographyAdapterComponent = createComponent(TypographyAdapter);

TypographyAdapterComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

TypographyAdapterComponent.__docgenInfo = {
  props: {
    type:    {
      description: "{String - 'stack', 'inline'} type of the typography"
    }, text: {
      description: "{String - styled or unstyled text to show inside the typography component"
    }
  }
};

export default TypographyAdapterComponent;
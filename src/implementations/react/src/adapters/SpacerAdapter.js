import * as HIG from 'hig-vanilla';
import * as PropTypes from 'prop-types';

import HIGElement from '../elements/HIGElement';
import HIGChildValidator from '../elements/HIGChildValidator';
import createComponent from './createComponent';
import Slot from './SlotAdapter';

class SpacerAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Spacer, initialProps)
  }

  componentDidMount() {
    if (this.slot) {
      this.addSlot(this.slot);
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];
      switch (propKey) {
        case 'type':
          this.hig.setType(propValue);
          break;
        case 'width':
          this.hig.setWidth(propValue);
          break;
        case 'inset':
          this.hig.setInset(propValue);
          break;
        case 'children': {
          //no-op
          break;
        }
        default:
          console.warn('Unknown key, not handled: ', propKey);
      }
    }
  }

  addSlot(element) {
    if (this.mounted) {
      this.hig.addSlot(element);
    } else {
      this.slot = element;
    }
  }

  insertBefore(instance) {
    this.appendChild(instance);
  }

  removeChild(instance) {
    if (instance instanceof Slot) {
      this.slot = null;
      instance.unmount();
    }
  }
}

const SpacerAdapterComponent = createComponent(SpacerAdapter);

SpacerAdapterComponent.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  inset: PropTypes.string,
  children: HIGChildValidator([Slot])
};

SpacerAdapterComponent.__docgenInfo = {
  props: {
    type: {
      description: "{String - 'stack', 'inline'} type of the spacer"
    },
    width: {
      description: "{String - 'none', 'xxs', 'xs', 's', 'm', 'l' 'xl', 'xxl'} width of the spacer"
    },
    inset: {
      description: "{String - 'none', 'xxs', 'xs', 's', 'm', 'l' 'xl', 'xxl'} width of the spacer inset"
    },
    children: {
      description: 'support adding Slot component'
    }
  }
};

export default SpacerAdapterComponent;
SpacerAdapterComponent.Slot = Slot;
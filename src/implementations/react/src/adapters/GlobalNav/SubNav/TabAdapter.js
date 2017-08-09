
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';
import PropTypes from 'prop-types';

export class TabAdapter extends HIGElement {
  componentDidMount() {
    if (this.initialProps.active) {
      this.hig.activate();
    } else {
      this.hig.deactivate();
    }
    if (this.initialProps.label) {
      this.hig.setLabel(this.initialProps.label);
    }
  }
  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'active': {
          if (propValue) {
            this.hig.activate();
          } else {
            this.hig.deactivate();
          }
          break;
        }
        case 'label': {
          this.hig.setLabel(propValue);
          break;
        }
        case 'onClick': {
          const dispose = this._disposeFunctions.get('onClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onClickDispose',
            this.hig.onClick(propValue)
          );
          break;
        }
        case 'id': {
          // no-op
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const TabAdapterComponent = createComponent(TabAdapter);

TabAdapterComponent.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.any
};

TabAdapterComponent.__docgenInfo = {
  props: {
    label: {
      description: 'sets the text of a tab'
    },

    active: {
      description: 'activates or deactivates the tab'
    },

    onClick: {
      description: 'calls provided handler when tab recieves a click'
    },

    id: {
      description: 'enables distinguishing one tab from another in code'
    }
  }
};

export default TabAdapterComponent;

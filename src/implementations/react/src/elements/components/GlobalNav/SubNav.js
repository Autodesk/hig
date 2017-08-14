
import * as PropTypes from 'prop-types';
import createComponent from '../../../adapters/createComponent';
import HIGElement from '../../HIGElement';
import HIGChildValidator from '../../HIGChildValidator';

// New tabs which have state in a separate react component
import TabsAdapterComponent, {
  TabsAdapter
} from '../../../adapters/GlobalNav/SubNav/TabsAdapter';
import Tabs from './Tabs';

export class SubNav extends HIGElement {
  componentDidMount() {
    if (this.tabs) {
      this.hig.addTabs(this.tabs.hig);
      this.tabs.mount();
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case TabsAdapter:
        return new TabsAdapter(this.hig.partials.Tabs, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof TabsAdapter) {
      if (this.tabs) {
        throw new Error('only one Tabs is allowed');
      } else {
        this.tabs = instance;
        if (this.mounted) {
          this.hig.addTabs(instance.hig);
          instance.mount();
        }
      }
    } else {
      throw new Error('unknown type');
    }
  }

  removeChild(instance) {
    if (instance instanceof TabsAdapter) {
      this.tabs = null;
    }

    instance.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'children': {
          // No-op
          break;
        }
        case 'moduleIndicatorIcon': {
          this.hig.setModuleIndicatorIcon(propValue);
          break;
        }
        case 'moduleIndicatorName': {
          this.hig.setModuleIndicatorName(propValue);
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const SubNavComponent = createComponent(SubNav);

SubNavComponent.propTypes = {
  moduleIndicatorName: PropTypes.string,
  moduleIndicatorIcon: PropTypes.string,
  children: HIGChildValidator([TabsAdapterComponent, Tabs])
};

SubNavComponent.__docgenInfo = {
  props: {
    moduleIndicatorName: {
      description: 'sets the moduleIndicatorName'
    },

    moduleIndicatorIcon: {
      description: 'sets the moduleIndicatorIcon'
    },

    children: {
      description: 'supports adding Tabs'
    }
  }
};

SubNavComponent.Tabs = Tabs;

export default SubNavComponent;

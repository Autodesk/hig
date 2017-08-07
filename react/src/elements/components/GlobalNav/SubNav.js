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
    this.processUpdateProps(updatePayload).mapToHIGFunctions({
      moduleIndicatorName: 'setModuleIndicatorName',
      moduleIndicatorIcon: 'setModuleIndicatorIcon'
    });
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

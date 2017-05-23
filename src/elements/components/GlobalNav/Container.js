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
import HIGElement from '../../HIGElement';
import HIGChildValidator from '../../HIGChildValidator';
import createComponent from '../../../adapters/createComponent';

import TopNavComponent, { TopNav } from './TopNav';
import SubNavComponent, { SubNav } from './SubNav';
import Slot from './Slot';

export class Container extends HIGElement {
  componentDidMount() {
    if (this.topNav) {
      this.hig.addTopNav(this.topNav.hig);
      this.topNav.mount();
    }

    if (this.subNav) {
      this.hig.addSubNav(this.subNav.hig);
      this.subNav.mount();
    }

    if (this.slot) {
      this.hig.addSlot(this.slot);
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case TopNav:
        return new TopNav(this.hig.partials.TopNav, props);
      case SubNav:
        return new SubNav(this.hig.partials.SubNav, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof TopNav) {
      if (this.mounted) {
        this.hig.addTopNav(instance.hig);
        instance.mount();
      } else {
        this.topNav = instance;
      }
    } else if (instance instanceof SubNav) {
      if (this.mounted) {
        this.hig.addSubNav(instance.hig);
        instance.mount();
      } else {
        this.subNav = instance;
      }
    } else {
      throw new Error(`unknown type`);
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
    instance.unmount();
  }
}

const ContainerComponent = createComponent(Container);

ContainerComponent.propTypes = {
  children: HIGChildValidator([TopNavComponent, SubNavComponent, Slot])
};

ContainerComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding TopNav, SubNav, and Slot'
    }
  }
};

ContainerComponent.TopNav = TopNavComponent;
ContainerComponent.SubNav = SubNavComponent;
ContainerComponent.Slot = Slot;

export default ContainerComponent;

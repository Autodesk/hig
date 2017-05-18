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
import * as HIG from 'hig.web';

import HIGElement from '../../HIGElement';
import createComponent from '../../../adapters/createComponent';

import ContainerComponent, { Container } from './Container';
import SideNavComponent, { SideNav } from './SideNav';

class GlobalNav extends HIGElement {
  constructor(initialProps) {
    super(HIG.GlobalNav, initialProps);
  }

  componentDidMount() {
    // Add any children
    if (this.sideNav) {
      this.hig.addSideNav(this.sideNav.hig);
      this.sideNav.componentDidMount();
    }

    if (this.container) {
      this.hig.addContainer(this.container.hig);
      this.container.componentDidMount();
    }

    if (this.initialProps.sideNavOpen) {
      this.hig.showSideNav();
    } else {
      this.hig.hideSideNav();
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Container:
        return new Container(this.hig.partials.Container, props);
      case SideNav:
        return new SideNav(this.hig.partials.SideNav, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof SideNav) {
      if (this.sideNav) {
        throw new Error('only one SideNav is allowed');
      } else {
        this.sideNav = instance;
        if (this.mounted) {
          this.hig.addSideNav(instance.hig);
          instance.componentDidMount();
        }
      }
    } else if (instance instanceof Container) {
      if (this.container) {
        throw new Error('only one Container is allowed');
      } else {
        this.container = instance;
        if (this.mounted) {
          this.hig.addContainer(instance.hig);
          instance.componentDidMount();
        }
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance) {
    this.appendChild(instance);
  }

  removeChild(instance) {
    if (instance instanceof SideNav) {
      this.sideNav = null;
    }

    if (instance instanceof Container) {
      this.container = null;
    }
    instance.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'sideNavOpen': {
          if (propValue) {
            this.hig.showSideNav();
          } else {
            this.hig.hideSideNav();
          }
          break;
        }
        case 'children': {
          /* no-op */
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const GlobalNavComponent = createComponent(GlobalNav);

GlobalNavComponent.Container = ContainerComponent;
GlobalNavComponent.SideNav = SideNavComponent;

export default GlobalNavComponent;

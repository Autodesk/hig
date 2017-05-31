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
import * as PropTypes from 'prop-types';

import HIGElement from '../../HIGElement';
import HIGChildValidator from '../../HIGChildValidator';
import createComponent from '../../../adapters/createComponent';

import SideNavComponent, { SideNav } from './SideNav';
import TopNavComponent, { TopNav } from './TopNav';
import SubNavComponent, { SubNav } from './SubNav';
import Slot from './Slot';

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

    if (this.topNav) {
      this.hig.addTopNav(this.topNav.hig);
      this.topNav.componentDidMount();
    }

    if (this.subNav) {
      this.hig.addSubNav(this.subNav.hig);
      this.subNav.componentDidMount();
    }

    if (this.initialProps.sideNavOpen) {
      this.hig.showSideNav();
    } else {
      this.hig.hideSideNav();
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
    } else if (instance instanceof TopNav) {
      if (this.topNav) {
        throw new Error('only one TopNav is allowed');
      } else {
        this.topNav = instance;
        if (this.mounted) {
          this.hig.addTopNav(instance.hig);
          instance.componentDidMount();
        }
      }
    } else if (instance instanceof SubNav) {
      if (this.SubNav) {
        throw new Error('only one SubNav is allowed');
      } else {
        this.subNav = instance;
        if (this.mounted) {
          this.hig.addSubNav(instance.hig);
          instance.componentDidMount();
        }
      }
    } else {
      throw new Error('unknown type');
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
    if (instance instanceof SideNav) {
      this.sideNav = null;
    } else if (instance instanceof TopNav) {
      this.topNav = null;
    } else if (instance instanceof SubNav) {
      this.subNav = null;
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

GlobalNavComponent.propTypes = {
  sideNavOpen: PropTypes.bool,
  children: HIGChildValidator([
    SideNavComponent,
    TopNavComponent,
    SubNavComponent,
    Slot
  ])
};

GlobalNavComponent.__docgenInfo = {
  props: {
    sideNavOpen: {
      description: 'show or hide the SideNav'
    },

    children: {
      description: 'support adding SideNav, SubNav, or TopNav'
    }
  }
};

GlobalNavComponent.SideNav = SideNavComponent;
GlobalNavComponent.TopNav = TopNavComponent;
GlobalNavComponent.SubNav = SubNavComponent;
GlobalNavComponent.Slot = Slot;

export default GlobalNavComponent;

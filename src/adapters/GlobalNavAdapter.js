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

import HIGElement from '../elements/HIGElement';
import HIGChildValidator from '../elements/HIGChildValidator';
import createComponent from './createComponent';

import SideNavComponent, { SideNav } from '../elements/components/GlobalNav/SideNav';
import TopNavComponent, { TopNav } from '../elements/components/GlobalNav/TopNav/TopNav';
import SubNavComponent, { SubNav } from '../elements/components/GlobalNav/SubNav';
import Slot from '../elements/components/GlobalNav/Slot';

class GlobalNav extends HIGElement {
  constructor(initialProps) {
    super(HIG.GlobalNav, initialProps);

    ['_toggleSideNav', '_render'].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });

    this.state = {
      sideNavOpen: false
    };
  }

  componentDidMount() {
    // Add any children
    if (this.sideNav) {
      this.hig.addSideNav(this.sideNav.hig);
      this.sideNav.mount();
    }

    if (this.topNav) {
      this.hig.addTopNav(this.topNav.hig);
      this.topNav.mount();
      this._addSideNavOpenCallback(this.topNav);
    }

    if (this.subNav) {
      this.hig.addSubNav(this.subNav.hig);
      this.subNav.mount();
    }

    if (this.initialProps.sideNavOpen) {
      this.hig.showSideNav();
    } else {
      this.hig.hideSideNav();
    }

    if (this.slot) {
      this.hig.addSlot(this.slot);
    }

    this._render();
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
          instance.mount();
        }
      }
    } else if (instance instanceof TopNav) {
      if (this.topNav) {
        throw new Error('only one TopNav is allowed');
      } else {
        this.topNav = instance;
        if (this.mounted) {
          this.hig.addTopNav(instance.hig);
          instance.mount();
          this._addSideNavOpenCallback(instance);
        }
      }
    } else if (instance instanceof SubNav) {
      if (this.subNav) {
        throw new Error('only one SubNav is allowed');
      } else {
        this.subNav = instance;
        if (this.mounted) {
          this.hig.addSubNav(instance.hig);
          instance.mount();
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
    this.processUpdateProps(updatePayload)
      .handle('sideNavOpen', value => {
        this.state.sideNavOpen = value;
      })
      .then(this._render);
  }

  _toggleSideNav() {
    this.state.sideNavOpen = !this.state.sideNavOpen;
    this._render();
  }

  _addSideNavOpenCallback(topNavInstance) {
    topNavInstance.onHamburgerClick(this._toggleSideNav);
  }

  _render() {
    let sideNavOpen = this.props.sideNavOpen;
    if (sideNavOpen === undefined) {
      sideNavOpen = this.state.sideNavOpen;
    }
    sideNavOpen ? this.hig.showSideNav() : this.hig.hideSideNav();
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

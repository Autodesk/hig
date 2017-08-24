import * as HIG from 'hig-vanilla';
import * as PropTypes from 'prop-types';

import HIGElement from '../../elements/HIGElement';
import HIGChildValidator from '../../elements/HIGChildValidator';
import createComponent from '../createComponent';

import SideNavAdapterComponent, { SideNavAdapter } from './SideNav/SideNavAdapter';
import TopNavAdapterComponent, {
  TopNavAdapter
} from './TopNav/TopNavAdapter';
import SubNavAdapterComponent, {
  SubNavAdapter
} from './SubNav/SubNavAdapter';
import Slot from '../../elements/components/GlobalNav/Slot';
import SideNav from '../../elements/components/GlobalNav/SideNav';

class GlobalNav extends HIGElement {
  constructor(initialProps) {
    super(HIG.GlobalNav, initialProps);
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
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case TopNavAdapter:
        return new TopNavAdapter(this.hig.partials.TopNav, props);
      case SubNavAdapter:
        return new SubNavAdapter(this.hig.partials.SubNav, props);
      case SideNavAdapter:
        return new SideNavAdapter(this.hig.partials.SideNav, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof SideNavAdapter) {
      if (this.sideNav) {
        throw new Error('only one SideNav is allowed');
      } else {
        this.sideNav = instance;
        if (this.mounted) {
          this.hig.addSideNav(instance.hig);
          instance.mount();
        }
      }
    } else if (instance instanceof TopNavAdapter) {
      if (this.topNav) {
        throw new Error('only one TopNav is allowed');
      } else {
        this.topNav = instance;
        if (this.mounted) {
          this.hig.addTopNav(instance.hig);
          instance.mount();
        }
      }
    } else if (instance instanceof SubNavAdapter) {
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
    if (instance instanceof SideNavAdapter) {
      this.sideNav = null;
    } else if (instance instanceof TopNavAdapter) {
      this.topNav = null;
    } else if (instance instanceof SubNavAdapter) {
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
          propValue ? this.hig.showSideNav() : this.hig.hideSideNav();
          break;
        }
        case 'children': {
          // No-op
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
    SideNav,
    SideNavAdapterComponent,
    TopNavAdapterComponent,
    SubNavAdapterComponent,
    Slot,
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

GlobalNavComponent.SideNav = SideNavAdapterComponent;
GlobalNavComponent.TopNav = TopNavAdapterComponent;
GlobalNavComponent.SubNav = SubNavAdapterComponent;
GlobalNavComponent.Slot = Slot;

export default GlobalNavComponent;

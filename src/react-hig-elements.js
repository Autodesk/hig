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

import partitionProps from './partitionProps';
import HIGNodeList from './HIGNodeList';

export const types = {
  BUTTON: 'hig-button',
  GLOBAL_NAV: 'hig-global-nav',
  CONTAINER: 'hig-container',
  TOP_NAV: 'hig-top-nav',
  SUB_NAV: 'hig-sub-nav',
  SIDE_NAV: 'hig-side-nav',
  SIDE_NAV_SECTIONS: 'hig-side-nav-sections',
  SIDE_NAV_LINKS: 'hig-side-nav-links',
  SIDE_NAV_SECTION: 'hig-side-nav-section',
  SIDE_NAV_LINK: 'hig-side-nav-link',
  SIDE_NAV_GROUP: 'hig-side-nav-group',
  SIDE_NAV_ITEM: 'hig-side-nav-item'
};

class HIGElement {
  constructor(HIGConstructor, initialProps) {
    this.initialProps = initialProps;
    const { defaults, events, possibleEvents } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;
    this.possibleEvents = possibleEvents;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    // Create the hig instance with the defaults as per the interface
    this.hig = new HIGConstructor(defaults);

    this.mounted = false;
  }

  mount(mountNode, beforeChild) {
    if (mountNode) {
      this.hig.mount(mountNode, beforeChild);
    }

    this.mounted = true;

    Object.keys(this.events).forEach(eventName => {
      this.setupEvent(eventName, this.events[eventName]);
    });

    if (this.componentDidMount) {
      this.componentDidMount();
    }
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();

    if (this.componentDidUnmount) {
      this.componentDidUnmount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    /* no-op */
    // sub-classes should implement if they need to
  }

  commitPropChange(propKey, propValue) {
    if (this.events[propKey]) {
      this.replaceEvent(propKey, propValue);
    } else if (this.possibleEvents.indexOf(propKey) !== -1) {
      this.setupEvent(propKey, propValue);
    } else {
      console.warn(`${propKey} is unknown`);
    }
  }

  setupEvent(eventName, eventFn) {
    // in this case we are setting up a new event
    const dispose = this.hig[eventName](eventFn);
    this._disposeFunctions.set(eventName, dispose);
    this.events[eventName] = eventFn;
  }

  replaceEvent(eventName, eventFn) {
    // Find the old dispose function
    const dispose = this._disposeFunctions.get(eventName);

    // If found, dispose of it
    if (dispose) {
      dispose();
    }

    if (eventFn) {
      // Replace in the local events map
      this.events[eventName] = eventFn;
      this._disposeFunctions.set(eventName, this.hig[eventName](eventFn));
    } else {
      delete this.events[eventName];
    }
  }
}

class Button extends HIGElement {
  constructor(initialProps) {
    super(HIG.Button, initialProps);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    const mapping = {
      title: 'setTitle',
      link: 'setLink'
    };

    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      if (mapping[propKey]) {
        this.hig[mapping[propKey]](propValue);
      } else {
        this.commitPropChange(propKey, propValue);
      }
    }
  }
}

class TopNav extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'logo':
          this.hig.setLogo(propValue);
          break;
        case 'logoLink':
          this.hig.setLogoLink(propValue);
          break;
        case 'onHamburgerClick': {
          const dispose = this._disposeFunctions.get('onHamburgerClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onHamburgerClickDispose',
            this.hig.onHamburgerClick(propValue)
          );
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

class SubNav extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      // const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'moduleIndicatorName':
          console.warn('moduleIndicatorName has no method in interface.json');
          break;
        case 'moduleIndicatorIcon':
          console.warn('moduleIndicatorName has no method in interface.json');
          break;
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

class MenuContainer extends HIGElement {
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

  createElement(type, props) {
    switch (type) {
      case types.TOP_NAV:
        return new TopNav(this.hig.partials.TopNav, props);
      case types.SUB_NAV:
        return new SubNav(this.hig.partials.SubNav, props);
      default:
        throw new Error(`Unknown type ${type}`);
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

class SideNavItem extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'icon':
          this.hig.setIcon(propValue);
          break;
        case 'title':
          this.hig.setTitle(propValue);
          break;
        case 'link':
          this.hig.setLink(propValue);
          break;
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

        case 'onHover': {
          const dispose = this._disposeFunctions.get('onHoverDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onHoverDispose',
            this.hig.onHover(propValue)
          );
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

class SideNavGroup extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    // items that get appended before mounting
    this.items = new HIGNodeList();
  }

  componentDidMount() {
    for (let instance of this.items) {
      this.hig.addItem(instance.hig);
      instance.mount();
    }
  }

  createElement(type, props) {
    switch (type) {
      case types.SIDE_NAV_ITEM:
        return new SideNavItem(this.hig.partials.Item, props);
      default:
        throw new Error(`Unknown type ${type}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof SideNavItem) {
      this.items.appendChild(instance);

      if (this.mounted) {
        this.hig.addItem(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.items.item(insertBeforeIndex);
    this.items.insertBefore(instance, beforeChild);
    this.hig.addItem(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    this.items.removeChild(instance);
    instance.unmount();
  }
}

class SideNavSection extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);
    this.groups = new HIGNodeList();
  }

  componentDidMount() {
    for (let instance of this.groups) {
      this.hig.addGroup(instance.hig);
      instance.mount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'headerLabel':
          this.hig.setHeaderLabel(propValue);
          break;
        case 'headerName':
          this.hig.setHeaderName(propValue);
          break;
        case 'children':
          /* no-op */
          break;
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  createElement(type, props) {
    switch (type) {
      case types.SIDE_NAV_GROUP:
        return new SideNavGroup(this.hig.partials.Group, props);
      default:
        throw new Error(`Unknown type ${type}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof SideNavGroup) {
      this.groups.appendChild(instance);

      if (this.mounted) {
        this.hig.addGroup(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.groups.item(insertBeforeIndex);
    this.groups.insertBefore(instance, beforeChild);
    this.hig.addGroup(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    const index = this.groups.indexOf(instance);
    this.groups.splice(index, 1);
    instance.unmount();
  }
}

// Does not extend HIGElement because it's not a real HIG component
class SideNavSections {
  constructor(higInstance) {
    this.hig = higInstance;
    this.sections = new HIGNodeList();
  }

  mount() {
    this.mounted = true;

    for (let instance of this.sections) {
      this.hig.addSection(instance.hig);
      instance.mount();
    }
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(type, props) {
    switch (type) {
      case types.SIDE_NAV_SECTION:
        return new SideNavSection(this.hig.partials.Section, props);
      default:
        throw new Error(`Unknown type ${type}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof SideNavSection) {
      this.sections.appendChild(instance);

      if (this.mounted) {
        this.hig.addSection(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.sections.item(insertBeforeIndex);
    this.sections.insertBefore(instance, beforeChild);
    this.hig.addSection(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    const index = this.sections.indexOf(instance);
    this.sections.splice(index, 1);
    instance.unmount();
  }
}

class SideNavLink extends HIGElement {
  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'title':
          this.hig.setTitle(propValue);
          break;
        case 'link':
          this.hig.setLink(propValue);
          break;
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
        case 'onHover': {
          const dispose = this._disposeFunctions.get('onHoverDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onHoverDispose',
            this.hig.onClick(propValue)
          );
          break;
        }

        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

// Does not extend HIGElement because it's not a real HIG component
class SideNavLinks {
  constructor(higInstance) {
    this.hig = higInstance;
    this.links = new HIGNodeList();
  }

  mount() {
    this.mounted = true;

    for (let instance of this.links) {
      this.hig.addSection(instance.hig);
      instance.mount();
    }
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(type, props) {
    switch (type) {
      case types.SIDE_NAV_LINK:
        return new SideNavLink(this.hig.partials.Link, props);
      default:
        throw new Error(`Unknown type ${type}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof SideNavLink) {
      this.links.appendChild(instance);

      if (this.mounted) {
        this.hig.addLink(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.links.item(insertBeforeIndex);
    this.links.insertBefore(instance, beforeChild);
    this.hig.addLink(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    const index = this.links.indexOf(instance);
    this.links.splice(index, 1);
    instance.unmount();
  }
}

class SideNav extends HIGElement {
  componentDidMount() {
    if (this.sections) {
      this.sections.mount();
    }

    if (this.links) {
      this.links.mount();
    }
  }

  createElement(type, props) {
    switch (type) {
      case types.SIDE_NAV_SECTIONS:
        return new SideNavSections(this.hig); // special case hand over the hig instance
      case types.SIDE_NAV_LINKS:
        return new SideNavLinks(this.hig); // special case hand over the hig instance
      default:
        throw new Error(`Unknown type ${type}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof SideNavSections) {
      if (this.sections) {
        throw new Error('only one Sections is allowed');
      } else {
        this.sections = instance;

        if (this.mounted) {
          instance.componentDidMount();
        }
      }
    } else if (instance instanceof SideNavLinks) {
      if (this.links) {
        throw new Error('only one links is allowed');
      } else {
        this.links = instance;

        if (this.mounted) {
          instance.componentDidMount();
        }
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    this.appendChild(instance);
  }

  removeChild(instance) {
    if (instance instanceof SideNavSections) {
      this.sections = null;
    }

    if (instance instanceof SideNavLinks) {
      this.links = null;
    }

    instance.unmount();
  }
}

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

  createElement(type, props) {
    switch (type) {
      case types.CONTAINER:
        return new MenuContainer(this.hig.partials.Container, props);
      case types.SIDE_NAV:
        return new SideNav(this.hig.partials.SideNav, props);
      default:
        throw new Error(`Unknown type ${type}`);
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
    } else if (instance instanceof MenuContainer) {
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

    if (instance instanceof MenuContainer) {
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

/**
 * Creates a publicly accessible element
 */
export function createElement(type, props) {
  switch (type) {
    case types.BUTTON:
      return new Button(props);
    case types.GLOBAL_NAV:
      return new GlobalNav(props);
    default:
      throw new Error(`Unknown type ${type}`);
  }
}

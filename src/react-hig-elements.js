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

export class Button {
  constructor(initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIG.Button._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    // Create the hig instance with the defaults as per the interface
    this.hig = new HIG.Button(defaults);
  }

  mount(mountNode, beforeChild) {
    this.hig.mount(mountNode, beforeChild);

    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue);
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
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

class TopNav {
  constructor(HIGConstructor, initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGConstructor(defaults);
  }

  componentDidMount() {
    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });
  }

  unmount() {
    this.hig.unmount();
  }

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

class SubNav {
  constructor(HIGConstructor, initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGConstructor(defaults);
  }

  componentDidMount() {
    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });
  }

  unmount() {
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

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

class MenuContainer {
  constructor(HIGConstructor, initialProps) {
    this.mounted = false;

    const { defaults, events } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGConstructor(defaults);
  }

  componentDidMount() {
    this.mounted = true;

    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });

    if (this.topNav) {
      this.hig.addTopNav(this.topNav.hig);
      this.topNav.componentDidMount();
    }

    if (this.subNav) {
      this.hig.addSubNav(this.subNav.hig);
      this.subNav.componentDidMount();
    }

    if (this.slot) {
      this.hig.addSlot(this.slot);
    }
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    /* no-op */
  }

  createElement(type, props) {
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance) {
    if (instance instanceof TopNav) {
      if (this.mounted) {
        this.hig.addTopNav(instance.hig);
        instance.componentDidMount();
      } else {
        this.topNav = instance;
      }
    } else if (instance instanceof SubNav) {
      if (this.mounted) {
        this.hig.addSubNav(instance.hig);
        instance.componentDidMount();
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

class SideNavItem {
  constructor(HIGConstructor, initialProps) {
    this.initialProps = initialProps;

    const { defaults, events } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGConstructor(defaults);
  }

  componentDidMount() {
    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
  }

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

class SideNavGroup {
  constructor(HIGConstructor, initialProps) {
    // items that get appended before mounting
    this.items = new HIGNodeList();

    this.initialProps = initialProps;

    const { defaults, events } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGConstructor(defaults);
  }

  componentDidMount() {
    this.mounted = true;

    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });

    for (let instance of this.items) {
      this.hig.addItem(instance.hig);
      instance.componentDidMount();
    }
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
  }

  createElement(type, props) {
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance) {
    if (instance instanceof SideNavItem) {
      this.items.appendChild(instance);

      if (this.mounted) {
        this.hig.addItem(instance.hig);
        instance.componentDidMount();
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.items.item(insertBeforeIndex);
    this.items.insertBefore(instance, beforeChild);
    this.hig.addItem(instance.hig, beforeChild.hig);
    instance.componentDidMount();
  }

  removeChild(instance) {
    this.items.removeChild(instance);
    instance.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    /* no-op */
  }
}

class SideNavSection {
  constructor(HIGConstructor, initialProps) {
    this.groups = new HIGNodeList();

    const { defaults, events } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGConstructor(defaults);
  }

  componentDidMount() {
    this.mounted = true;

    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });

    for (let instance of this.groups) {
      this.hig.addGroup(instance.hig);
      instance.componentDidMount();
    }
  }

  unmount() {
    this.hig.unmount();
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
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance) {
    if (instance instanceof SideNavGroup) {
      this.groups.appendChild(instance);

      if (this.mounted) {
        this.hig.addGroup(instance.hig);
        instance.componentDidMount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.groups.item(insertBeforeIndex);
    this.groups.insertBefore(instance, beforeChild);
    this.hig.addGroup(instance.hig, beforeChild.hig);
    instance.componentDidMount();
  }

  removeChild(instance) {
    const index = this.groups.indexOf(instance);
    this.groups.splice(index, 1);
    instance.unmount();
  }
}

class SideNavSections {
  constructor(higInstance) {
    this.hig = higInstance;
    this.sections = new HIGNodeList();
  }

  componentDidMount() {
    this.mounted = true;

    for (let instance of this.sections) {
      this.hig.addSection(instance.hig);
      instance.componentDidMount();
    }
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(type, props) {
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance) {
    if (instance instanceof SideNavSection) {
      this.sections.appendChild(instance);

      if (this.mounted) {
        this.hig.addSection(instance.hig);
        instance.componentDidMount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.sections.item(insertBeforeIndex);
    this.sections.insertBefore(instance, beforeChild);
    this.hig.addSection(instance.hig, beforeChild.hig);
    instance.componentDidMount();
  }

  removeChild(instance) {
    const index = this.sections.indexOf(instance);
    this.sections.splice(index, 1);
    instance.unmount();
  }
}

class SideNavLink {
  constructor(HIGConstructor, initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGConstructor(defaults);
  }

  componentDidMount() {
    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });
  }

  unmount() {
    this.hig.unmount();
  }

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

class SideNavLinks {
  constructor(higInstance) {
    this.hig = higInstance;
    this.links = new HIGNodeList();
  }

  componentDidMount() {
    this.mounted = true;

    for (let instance of this.links) {
      this.hig.addSection(instance.hig);
      instance.componentDidMount();
    }
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(type, props) {
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance) {
    if (instance instanceof SideNavLink) {
      this.links.appendChild(instance);

      if (this.mounted) {
        this.hig.addLink(instance.hig);
        instance.componentDidMount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.links.item(insertBeforeIndex);
    this.links.insertBefore(instance, beforeChild);
    this.hig.addLink(instance.hig, beforeChild.hig);
    instance.componentDidMount();
  }

  removeChild(instance) {
    const index = this.links.indexOf(instance);
    this.links.splice(index, 1);
    instance.unmount();
  }
}

class SideNav {
  constructor(HIGSidebar, initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIGSidebar._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGSidebar(defaults);
  }

  componentDidMount() {
    this.mounted = true;

    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });

    if (this.sections) {
      this.sections.componentDidMount();
    }

    if (this.links) {
      this.links.componentDidMount();
    }
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    // no-op
  }

  createElement(type, props) {
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance) {
    if (instance instanceof SideNavSections) {
      if (this.sections) {
        throw new Error('only one sections is allowed');
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

class GlobalNav {
  constructor(initialProps) {
    this.initialProps = initialProps;

    const { defaults, events } = partitionProps(
      initialProps,
      HIG.GlobalNav._interface
    );

    this.mounted = false;

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    // Create the hig instance with the defaults as per the interface
    this.hig = new HIG.GlobalNav(defaults);
  }

  mount(mountNode, anchorNode) {
    this.hig.mount(mountNode, anchorNode);
    this.mounted = true;

    // Wire up events
    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });

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

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
  }

  createElement(type, props) {
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof SideNav) {
      if (this.mounted) {
        this.hig.addSideNav(instance.hig);
        instance.componentDidMount();
      } else {
        this.sideNav = instance;
      }
    } else if (instance instanceof MenuContainer) {
      if (this.mounted) {
        this.hig.addContainer(instance.hig);
        instance.componentDidMount();
      } else {
        this.container = instance;
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance) {
    this.appendChild(instance);
  }

  removeChild(instance) {
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

/**
 * Creates a hig element which requires a parent node reference
 */
function createPrivateElement(parent, type, props) {
  switch (type) {
    case types.CONTAINER:
      return new MenuContainer(parent.partials.Container, props);
    case types.TOP_NAV:
      return new TopNav(parent.partials.TopNav, props);
    case types.SUB_NAV:
      return new SubNav(parent.partials.SubNav, props);
    case types.SIDE_NAV:
      return new SideNav(parent.partials.SideNav, props);
    case types.SIDE_NAV_SECTIONS:
      return new SideNavSections(parent);
    case types.SIDE_NAV_SECTION:
      return new SideNavSection(parent.partials.Section, props);
    case types.SIDE_NAV_LINKS:
      return new SideNavLinks(parent);
    case types.SIDE_NAV_LINK:
      return new SideNavLink(parent.partials.Link, props);
    case types.SIDE_NAV_GROUP:
      return new SideNavGroup(parent.partials.Group, props);
    case types.SIDE_NAV_ITEM:
      return new SideNavItem(parent.partials.Item, props);
    default:
      throw new Error(`Unknown type ${type}`);
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

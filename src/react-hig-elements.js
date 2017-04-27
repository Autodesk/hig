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

/**
 * Takes reactProps and an interface and returns props
 * @param {React.Properties} reactProps
 * @param {HIG.Web.Interface} _interface
 *
 * - Returns an object which has a defaults and events keys
 *
 * @example
 *
 *  const reactProps = { title: 'Hello', onClick: Function };
 *  const _interface = {
 *    defaults: {
 *      title: 'something'
 *    },
 *
 *    methods: {
 *      onClick: 'HIG.Abstract.EventObject'
 *    }
 *  }
 *
 * const { defaults, events } = inspectProps(reactProps, _interface)
 *
 * > defaults === { title: 'Hello' }
 * > events === { onClick: Function }
 */
function partitionProps(reactProps, _interface) {
  // sometimes defaults is undefined
  const propKeys = Object.keys(_interface.defaults || {});

  // Narrow props down to just defaults
  const defaults = Object.keys(reactProps)
    .filter(prop => propKeys.indexOf(prop) !== -1)
    .reduce(
      (acc, memo) => {
        acc[memo] = reactProps[memo];
        return acc;
      },
      {}
    );

  // set up events
  const eventKeys = Object.keys(_interface.methods).filter(methodName => {
    return _interface.methods[methodName] === 'HIG.Abstract.EventObject';
  });

  // Narrow props down to just events
  const events = Object.keys(reactProps)
    .filter(prop => eventKeys.indexOf(prop) !== -1)
    .reduce(
      (acc, memo) => {
        acc[memo] = reactProps[memo];
        return acc;
      },
      {}
    );

  return { defaults, events };
}

class HIGNodeList {
  constructor() {
    this.nodes = [];
  }

  appendChild(node) {
    this.nodes.push(node);
  }

  insertBefore(node, beforeNode) {
    const index = this.nodes.indexOf(beforeNode);
    this.nodes.splice(index, 0, node);
  }

  removeChild(node) {
    const index = this.nodes.indexOf(node);
    this.nodes.splice(index, 1);
  }

  item(index) {
    return this.nodes[index];
  }

  [Symbol.iterator]() {
    var nextIndex = 0;

    return {
      next: () => {
        return nextIndex < this.nodes.length
          ? { value: this.nodes[nextIndex++], done: false }
          : { done: true };
      }
    };
  }
}

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

export class MenuTop {
  constructor(HIGTop, initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIGTop._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGTop(defaults);
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
    if (this._toggleListener) {
      this._toggleListener.dispose();
    }

    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'logo':
          console.error(
            'setLogo is not implemented on hig.web Menu.Content.Top'
          );
          break;
        case 'logo_link':
          console.error(
            'setLogoLink is not implemented on hig.web Menu.Content.Top'
          );
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

export class SidebarItem {
  constructor(HIGSidebarItem, initialProps) {
    this.initialProps = initialProps;

    const { defaults, events } = partitionProps(
      initialProps,
      HIGSidebarItem._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGSidebarItem(defaults);
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
        case 'title': {
          console.error(
            'setTitle is not implemented on hig.web SidebarGroupItem'
          );
          break;
        }
        case 'link': {
          console.error(
            'setLink is not implemented on hig.web SidebarGroupItem'
          );
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

export class SidebarGroup {
  constructor(HIGSidebarGroup, initialProps) {
    // items that get appended before mounting
    this.items = new HIGNodeList();

    this.initialProps = initialProps;

    const { defaults, events } = partitionProps(
      initialProps,
      HIGSidebarGroup._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGSidebarGroup(defaults);
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
    if (instance instanceof SidebarItem) {
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

export class MenuContent {
  constructor(HIGContent, initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIGContent._interface
    );

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    this.hig = new HIGContent(defaults);
  }

  componentDidMount() {
    this.mounted = true;

    Object.keys(this.events).forEach(eventName => {
      // Send function to the hig instance to be registered
      const dispose = this.hig[eventName](this.events[eventName]);

      // Save the dispose function as a field in case it needs to be updated
      this._disposeFunctions.set(`${eventName}Dispose`, dispose);
    });

    if (this.top) {
      this.hig.addTop(this.top.hig);
      this.top.componentDidMount();
    }

    // Cleanup
    this.top = null;
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
    if (instance instanceof MenuTop) {
      if (this.mounted) {
        this.hig.addTop(instance.hig);
        instance.componentDidMount();
      } else {
        this.top = instance;
      }
    }
  }

  insertBefore(instance) {
    this.appendChild(instance);
  }

  removeChild(instance) {
    instance.unmount();
  }
}

export class Sidebar {
  constructor(HIGSidebar, initialProps) {
    // Groups that get appended before mounting
    this.groups = new HIGNodeList();

    this.initialProps = initialProps;

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

    if (this.initialProps.open) {
      this.hig.showSidebar();
    } else {
      this.hig.hideSidebar();
    }

    for (let instance of this.groups) {
      this.hig.addGroup(instance.hig);
      instance.componentDidMount();
    }
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'open': {
          if (propValue) {
            this.hig.showSidebar();
          } else {
            this.hig.hideSidebar();
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

  createElement(type, props) {
    return createPrivateElement(this.hig, type, props);
  }

  appendChild(instance) {
    if (instance instanceof SidebarGroup) {
      this.groups.appendChild(instance);

      if (this.mounted) {
        this.hig.addGroup(instance.hig);
        instance.componentDidMount();
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.groups.item(insertBeforeIndex);
    this.items.insertBefore(instance, beforeChild);
    this.hig.addGroup(instance.hig, beforeChild.hig);
    instance.componentDidMount();
  }

  removeChild(instance) {
    const index = this.groups.indexOf(instance);
    this.groups.splice(index, 1);
    instance.unmount();
  }
}

// export class Slot {
//   constructor() {
//     this.hig = new HIGWeb.Slot();
//   }

//   getDOMNode() {
//     return this.hig.getDOMNode();
//   }

//   mount(mountNode, anchorNode) {
//     this.hig.mount(mountNode, anchorNode);
//   }

//   commitUpdate() {
//     /* no-op */
//   }

//   unmount() {
//     this.hig.unmount();
//   }
// }

export class Menu {
  constructor(initialProps) {
    const { defaults, events } = partitionProps(
      initialProps,
      HIG.Menu._interface
    );

    this.mounted = false;

    // Store the events until we mount
    this.events = events;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    // Create the hig instance with the defaults as per the interface
    this.hig = new HIG.Menu(defaults);
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
    if (this.sidebar) {
      this.hig.addSidebar(this.sidebar.hig);
      this.sidebar.componentDidMount();
    }

    // Cleanup
    this.sidebar = null;

    if (this.content) {
      this.hig.addContent(this.content.hig);
      this.content.componentDidMount();
    }

    // Cleanup
    this.content = null;
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
    if (instance instanceof Sidebar) {
      if (this.mounted) {
        this.hig.addSidebar(instance.hig);
        instance.componentDidMount();
      } else {
        this.sidebar = instance;
      }
    } else if (instance instanceof MenuContent) {
      if (this.mounted) {
        this.hig.addContent(instance.hig);
        instance.componentDidMount();
      } else {
        this.content = instance;
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

  commitUpdate(updatePayload, oldProps, newProps) {
    /* no-op */
  }
}

export const types = {
  BUTTON: 'hig-button',
  MENU: 'hig-menu',
  MENU_CONTENT: 'hig-menu-content',
  MENU_TOP: 'hig-menu-top',
  MENU_SIDEBAR: 'hig-menu-sidebar',
  MENU_SIDEBAR_GROUP: 'hig-menu-sidebar-group',
  MENU_SIDEBAR_ITEM: 'hig-menu-sidebar-item'
};

/**
 * Creates a hig element which requires a parent node reference
 */
function createPrivateElement(parent, type, props) {
  switch (type) {
    case types.MENU_SIDEBAR_ITEM:
      return new SidebarItem(parent.partials.Item, props);
    case types.MENU_SIDEBAR_GROUP:
      return new SidebarGroup(parent.partials.Group, props);
    case types.MENU_SIDEBAR:
      return new Sidebar(parent.partials.Sidebar, props);
    case types.MENU_CONTENT:
      return new MenuContent(parent.partials.Content, props);
    case types.MENU_TOP:
      return new MenuTop(parent.partials.Top, props);
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
    case types.MENU:
      return new Menu(props);
    default:
      throw new Error(`Unknown type ${type}`);
  }
}

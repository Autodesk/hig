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
import * as HIGWeb from './hig-web';

export class Button {
  constructor(props) {
    this.hig = new HIGWeb.Button();

    if (props.children) {
      this.hig.setLabel(props.children);
    }

    if (props.onClick) {
      this._clickListener = this.hig.onClick(props.onClick);
    }
  }

  mount(mountNode, beforeChild) {
    this.hig.mount(mountNode, beforeChild);
  }

  unmount() {
    if (this._clickListener) {
      this._clickListener.dispose();
    }
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'children': {
          this.hig.setLabel(propValue);
          break;
        }
        case 'onClick': {
          if (this._clickListener) {
            this._clickListener.dispose();
          }

          this._clickListener = this.hig.onClick(propValue);
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
  constructor(props) {
    this.hig = new HIGWeb.MenuTop();

    if (props.onToggle) {
      this._toggleListener = this.hig.onToggle(props.onToggle);
    }
  }

  mount(mountNode, anchorNode) {
    this.hig.mount(mountNode, anchorNode);
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
        case 'onToggle': {
          if (this._toggleListener) {
            this._toggleListener.dispose();
          }

          this._toggleListener = this.hig.onToggle(propValue);
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
  constructor(props) {
    this.hig = new HIGWeb.SidebarItem();

    if (props.children) {
      this.hig.setLabel(props.children);
    }

    if (props.selected) {
      this.hig.setSelected(props.selected);
    }

    if (props.onClick) {
      this._clickListener = this.hig.onClick(props.onClick);
    }
  }

  mount(mountNode, anchorNode) {
    this.hig.mount(mountNode, anchorNode);
  }

  unmount() {
    if (this._clickListener) {
      this._clickListener.dispose();
    }
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'children': {
          this.hig.setLabel(propValue);
          break;
        }
        case 'selected': {
          this.hig.setSelected(propValue);
          break;
        }
        case 'onClick': {
          if (this._clickListener) {
            this._clickListener.dispose();
          }

          this._clickListener = this.hig.onClick(propValue);
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
  constructor(props) {
    this.hig = new HIGWeb.SidebarGroup();

    if (props.small) {
      this.hig.setSize('small');
    }
  }

  mount(mountNode, anchorNode) {
    this.hig.mount(mountNode, anchorNode);
  }

  unmount() {
    this.hig.unmount();
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof SidebarItem) {
      this.hig.appendItem(instance.hig, beforeChild.hig);
    } else {
      throw new Error('unknown type');
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'small': {
          if (propValue) {
            this.hig.setSize('small');
          } else {
            this.hig.setSize('large');
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

export class Sidebar {
  constructor(props) {
    this.hig = new HIGWeb.Sidebar();

    if (props.open) {
      this.hig.setOpen(open);
    }
  }

  mount(mountNode, anchorNode) {
    this.hig.mount(mountNode, anchorNode);
  }

  unmount() {
    this.hig.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'open': {
          this.hig.setOpen(propValue);
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

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof SidebarGroup) {
      this.hig.appendGroup(instance.hig, beforeChild.hig);
    } else {
      throw new Error('unknown type');
    }
  }
}

export class Slot {
  constructor() {
    this.hig = new HIGWeb.Slot();
  }

  getDOMNode() {
    return this.hig.getDOMNode();
  }

  mount(mountNode, anchorNode) {
    this.hig.mount(mountNode, anchorNode);
  }

  commitUpdate() {
    /* no-op */
  }

  unmount() {
    this.hig.unmount();
  }
}

export class Menu {
  constructor(props) {
    this.hig = new HIGWeb.Menu();
  }

  mount(mountNode, anchorNode) {
    this.hig.mount(mountNode, anchorNode);
  }

  unmount() {
    this.hig.unmount();
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof Slot) {
      this.hig.appendSlot(instance.hig, beforeChild.hig);
    } else if (instance instanceof MenuTop) {
      this.hig.appendTop(instance.hig, beforeChild.hig);
    } else if (instance instanceof Sidebar) {
      this.hig.appendSidebar(instance.hig, beforeChild.hig);
    } else {
      throw new Error('unknown type');
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    /* no-op */
  }
}

const elements = {
  'hig-slot': Slot,
  'hig-button': Button,
  'hig-menu': Menu,
  'hig-menu-top': MenuTop,
  'hig-sidebar': Sidebar,
  'hig-sidebar-group': SidebarGroup,
  'hig-sidebar-item': SidebarItem
};

export function createElement(type, props) {
  if (elements[type]) {
    return new elements[type](props);
  } else {
    throw new Error(`Unknown type ${type}`);
  }
}

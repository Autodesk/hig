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
import React from 'react';
import ReactDOM from 'react-dom';

import { createElement, types } from './react-hig-elements';
import prepareUpdate from './prepareUpdate';

function createComponent(type) {
  const Adapter = class extends React.Component {
    static HIG_COMPONENT = true;

    constructor(props, context) {
      super(props);

      if (context.parent) {
        this.instance = context.parent.createElement(type, props);
      } else {
        this.instance = createElement(type, props);
      }
    }

    componentDidMount() {
      this._el = ReactDOM.findDOMNode(this);
      this._mount = this._el.parentNode;

      this._anchor = document.createComment(`${type}-anchor`);

      if (!this._mount) {
        throw new Error('can only mount if there is a parentNode');
      }

      this._mount.replaceChild(this._anchor, this._el);

      if (!this.context.parent) {
        this.instance.mount(this._mount, this._anchor);
      } else {
        const insertBeforeIndex = Array.from(
          this._anchor.parentNode.childNodes
        ).indexOf(this._anchor);

        if (
          this._anchor.nextSibling &&
          this._anchor.nextSibling.nodeType ===
            this._anchor.nextSibling.COMMENT_NODE
        ) {
          this.context.parent.insertBefore(this.instance, insertBeforeIndex);
        } else {
          this.context.parent.appendChild(this.instance);
        }
      }
    }

    componentWillUnmount() {
      this._mount.replaceChild(this._el, this._anchor);

      if (this.context.parent) {
        this.context.parent.removeChild(this.instance);
      } else {
        this.instance.unmount();
      }
    }

    componentWillReceiveProps(nextProps) {
      const updatePayload = prepareUpdate(this.props, nextProps);

      if (updatePayload) {
        this.instance.commitUpdate(updatePayload, this.props, nextProps);
      }
    }

    render() {
      return React.createElement(type, {}, this.props.children);
    }

    getChildContext() {
      if (this.instance.appendChild) {
        return {
          parent: this.instance
        };
      } else {
        return {
          parent: null
        };
      }
    }
  };

  Adapter.displayName = type;

  Adapter.contextTypes = {
    parent: PropTypes.shape({
      appendChild: PropTypes.func
    })
  };

  Adapter.childContextTypes = {
    parent: PropTypes.shape({
      appendChild: PropTypes.func
    })
  };

  return Adapter;
}

function createSlotComponent() {
  const Adapter = class extends React.Component {
    componentDidMount() {
      if (this.context.parent) {
        this.context.parent.addSlot(this.container);
      }
    }

    render() {
      const { children, ...rest } = this.props;
      return <div ref={r => this.container = r} {...rest}>{children}</div>;
    }

    getChildContext() {
      return {
        parent: null
      };
    }
  };

  Adapter.displayName = `hig-slot`;

  // Reset all the context for any children of the slot
  // In case we go back to the HIG context
  Adapter.childContextTypes = {
    parent: PropTypes.shape({
      appendChild: PropTypes.func
    })
  };

  Adapter.contextTypes = {
    parent: PropTypes.shape({
      addSlot: PropTypes.func
    })
  };

  return Adapter;
}

export const Button = createComponent(types.BUTTON);
export const Slot = createSlotComponent();
export const GlobalNav = createComponent(types.GLOBAL_NAV);

GlobalNav.Container = createComponent(types.CONTAINER);
GlobalNav.Container.TopNav = createComponent(types.TOP_NAV);
GlobalNav.Container.SubNav = createComponent(types.SUB_NAV);
GlobalNav.SideNav = createComponent(types.SIDE_NAV);
GlobalNav.SideNav.Sections = createComponent(types.SIDE_NAV_SECTIONS);
GlobalNav.SideNav.Sections.Item = createComponent(types.SIDE_NAV_SECTION);
GlobalNav.SideNav.Links = createComponent(types.SIDE_NAV_LINKS);
GlobalNav.SideNav.Links.Item = createComponent(types.SIDE_NAV_LINK);
GlobalNav.SideNav.Sections.Group = createComponent(types.SIDE_NAV_GROUP);
GlobalNav.SideNav.Sections.Group.Item = createComponent(types.SIDE_NAV_ITEM);

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
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createElement } from './react-hig-elements';
import prepareUpdate from './prepareUpdate';

// TODO change for hig.web css
import './hig-web.css';

class ResetContext extends React.Component {
  render() {
    // renderSubtreeIntoContainer needs a single React Element instead of a collection
    // wrap in a div if we have to. Fix this once Fiber is released since we can
    // render fragments

    const element = React.isValidElement(this.props.children)
      ? this.props.children
      : <div>{this.props.children}</div>;

    return element;
  }
  getChildContext() {
    return {
      parent: null
    };
  }
}

ResetContext.childContextTypes = {
  parent: PropTypes.shape({
    appendChild: PropTypes.func
  })
};

function createComponent(type) {
  const Adapter = class extends React.Component {
    static HIG_COMPONENT = true;

    static defaultProps = {
      root: false
    };

    constructor(props) {
      super(props);
      this.instance = createElement(type, props);
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
        this.context.parent.appendChild(this.instance);
      }
    }

    componentWillUnmount() {
      this._mount.replaceChild(this._el, this._anchor);
      this.instance.unmount();
    }

    componentWillReceiveProps(nextProps) {
      const updatePayload = prepareUpdate(this.props, nextProps);

      if (updatePayload) {
        this.instance.commitUpdate(updatePayload, this.props, nextProps);
      }
    }

    render() {
      return <hig-component>{this.props.children}</hig-component>;
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

    getDOMNode() {
      return this.instance.getDOMNode();
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

function createSlotComponent(type) {
  const BaseComponent = createComponent(type);

  const Adapter = class extends React.Component {
    componentDidMount() {
      this.renderSlot(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.renderSlot(nextProps);
    }

    renderSlot(props) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        <ResetContext>{props.children}</ResetContext>,
        this.instance.getDOMNode()
      );
    }

    render() {
      return <BaseComponent ref={r => this.instance = r} {...this.props} />;
    }
  };

  Adapter.displayName = `${type}-container`;

  return Adapter;
}

export const Button = createComponent('hig-button');
export const Menu = createComponent('hig-menu');
Menu.Top = createComponent('hig-menu-top');
Menu.Sidebar = createComponent('hig-sidebar');
Menu.Sidebar.Group = createComponent('hig-sidebar-group');
Menu.Sidebar.Item = createComponent('hig-sidebar-item');

export const Slot = createSlotComponent('hig-slot');

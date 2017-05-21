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

import React from 'react';
import * as PropTypes from 'prop-types';

import prepareUpdate from './prepareUpdate';

export default function createComponent(ElementConstructor) {
  const displayName = ElementConstructor.name;

  /**
   * @augments {React.Component<*, *>}
   */
  const Adapter = class extends React.Component {
    constructor(props, context) {
      super(props);

      if (context.parent) {
        this.instance = context.parent.createElement(ElementConstructor, props);
      } else {
        this.instance = new ElementConstructor(props);
      }
    }

    componentDidMount() {
      this._mount = this._el.parentNode;

      this._anchor = document.createComment(`${displayName}-anchor`);

      if (!this._mount) {
        throw new Error(
          `can only mount if there is a parentNode: ${displayName}`
        );
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
      return React.createElement(
        'hig-element',
        {
          ref: r => this._el = r
        },
        this.props.children
      );
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

  /**
   * React prop-types
   */
  Adapter.propTypes = {};

  /**
   * Empty __docgenInfo for storybook reflection
   */
  Adapter.__docgenInfo = {};

  Adapter.displayName = displayName;

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

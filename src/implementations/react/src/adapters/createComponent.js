

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

      if (!this._mount) {
        throw new Error(
          `can only mount if there is a parentNode: ${displayName}`
        );
      }

      if (!this.context.parent) {
        // Top level component
        this._anchor = document.createComment(`${displayName}-anchor`);
        this._mount.replaceChild(this._anchor, this._el);
        this.instance.mount(this._mount, this._anchor);
      } else {
        const insertBeforeIndex = Array.from(
          this._el.parentNode.childNodes
        ).indexOf(this._el);

        if (this.context.parent.insertBefore) {
          this.context.parent.insertBefore(this.instance, insertBeforeIndex);
        } else {
          this.context.parent.appendChild(this.instance);
        }
      }
    }

    componentWillUnmount() {
      if (!this.context.parent) {
        this._mount.replaceChild(this._el, this._anchor);
        this.instance.unmount();
      } else {
        this.context.parent.removeChild(this.instance);
      }
    }

    forceNextReset() {
      this.isForceNextReset = true;
    }

    componentWillReceiveProps(nextProps) {
      if (this.isForceNextReset) {
        this.isForceNextReset = false;
        this.instance.forceReset(nextProps);
      }

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
      if (this.instance) {
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
   * React default props
   */
  Adapter.defaultProps = {};

  /**
   * Empty __docgenInfo for storybook reflection
   */
  Adapter.__docgenInfo = {};

  Adapter.displayName = displayName;

  Adapter.contextTypes = {
    parent: PropTypes.object
  };

  Adapter.childContextTypes = {
    parent: PropTypes.object
  };

  return Adapter;
}

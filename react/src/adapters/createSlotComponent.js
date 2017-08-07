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

export default function createSlotComponent() {
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

  Adapter.displayName = `Slot`;

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

  Adapter.propTypes = {
    children: PropTypes.node.isRequired
  };

  Adapter.__docgenInfo = {
    props: {
      children: {
        description: 'support adding any DOM node'
      }
    }
  };

  return Adapter;
}

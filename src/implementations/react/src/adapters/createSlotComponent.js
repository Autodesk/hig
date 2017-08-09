
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

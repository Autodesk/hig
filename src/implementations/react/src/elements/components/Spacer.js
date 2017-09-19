import React from "react";
import PropTypes from 'prop-types';
import SpacerAdapter from "../../adapters/SpacerAdapter";
import Slot from '../../adapters/SlotAdapter';

class Spacer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }

  setSlotEl = el => {
    this.setState({ content: el });
  };

  render() {
    return (
      <SpacerAdapter {...this.props}>
        <Slot>{
          this.props.children
           ? this.props.children
           : <div></div>
        }</Slot>
      </SpacerAdapter>
    );
  }
}

Spacer.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  inset: PropTypes.string,
  children: PropTypes.node
};

Spacer.__docgenInfo = {
  props: {
    type: {
      description: "{String - 'stack', 'inline'} type of the spacer"
    },
    width: {
      description: "{String - 'none', 'xxs', 'xs', 's', 'm', 'l' 'xl', 'xxl'} width of the spacer"
    },
    inset: {
      description: "{String - 'none', 'xxs', 'xs', 's', 'm', 'l' 'xl', 'xxl'} width of the spacer inset"
    },
    children: {
      description: 'any content'
    }
  }
};

export default Spacer;

import React from 'react';
import FlyoutAdapter from '../../adapters/FlyoutAdapter';
import Slot from '../../elements/components/GlobalNav/Slot';

class Flyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTargetEl = (el) => {
    this.setState({targetEl: el})
  };

  render() {

    return (

      <FlyoutAdapter
        anchorPoint={this.props.anchorPoint}
        open={this.props.open}
        onClickOutside={this.props.onClickOutside}
        target={this.state.targetEl}
        content={this.props.content}
        >
        <div ref={this.setTargetEl}>{this.props.children}</div>
      </FlyoutAdapter>
    )
  }
}

export default Flyout;
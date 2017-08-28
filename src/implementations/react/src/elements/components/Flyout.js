import React from 'react';
import FlyoutAdapter from '../../adapters/FlyoutAdapter';
import Slot from '../../elements/components/GlobalNav/Slot';

class Flyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTargetEl = (el) => {
    this.setState({target: el})
  };

  setContentEl = (el) => {
    this.setState({content: el})
  }


  render() {

    return (

      <FlyoutAdapter
        anchorPoint={this.props.anchorPoint}
        open={this.props.open}
        onClickOutside={this.props.onClickOutside}
        target={this.state.target}
        content={this.state.content}
        >
        <div ref={this.setTargetEl}>{this.props.children}</div>
        <div ref={this.setContentEl}>test test test</div>
      </FlyoutAdapter>
    )
  }
}

export default Flyout;
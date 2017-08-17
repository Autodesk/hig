// 'h1', 'h2', 'h3', 'sub1', 'sub2', 'body', 'bold', 'disabled', 'caption'
import React from 'react';
import Typography from '../../adapters/TypographyAdapter'
import * as PropTypes from 'prop-types'

class H1Component extends React.Component {
  render() {
    return (<Typography type="h1" text={this.props.children} />)
  }
}

class H2Component extends React.Component {
  render() {
    return (<Typography type="h2" text={this.props.children} />)
  }
}

class H3Component extends React.Component {
  render() {
    return (<Typography type="h3" text={this.props.children} />)
  }
}

class Sub1Component extends React.Component {
  render() {
    return (<Typography type="sub1" text={this.props.children} />)
  }
}

class Sub2Component extends React.Component {
  render() {
    return (<Typography type="sub2" text={this.props.children} />)
  }
}

class BodyComponent extends React.Component {
  render() {
    return (<Typography type="body" text={this.props.children} />)
  }
}

class BoldComponent extends React.Component {
  render() {
    return (<Typography type="bold" text={this.props.children} />)
  }
}

class DisabledComponent extends React.Component {
  render() {
    return (<Typography type="disabled" text={this.props.children} />)
  }
}

class CaptionComponent extends React.Component {
  render() {
    return (<Typography type="caption" text={this.props.children} />)
  }
}

H1Component.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
H2Component.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
H3Component.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
Sub1Component.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
Sub2Component.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
BodyComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
BoldComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
CaptionComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
DisabledComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};

export {
  H1Component as H1,
  H2Component as H2,
  H3Component as H3,
  Sub1Component as Sub1,
  Sub2Component as Sub2,
  BodyComponent as Body,
  BoldComponent as Bold,
  DisabledComponent as Disabled,
  CaptionComponent as Caption,
}





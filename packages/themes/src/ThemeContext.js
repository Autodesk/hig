import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HIGLightTheme from './HIGLightTheme';

const themeContextShape = {
  themeId: PropTypes.string,
  themeClass: PropTypes.string
}

class Provider extends Component {
  static propTypes = {
    value: PropTypes.shape(themeContextShape),
    children: PropTypes.node.isRequired
  }

  static childContextTypes = themeContextShape;

  static defaultProps = {
    value: HIGLightTheme
  }

  getChildContext() {
    return { ...this.props.value };
  }

  render() {
    return this.props.children;
  }
}

class Consumer extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  static contextTypes = themeContextShape;

  render() {
    return this.props.children(this.context.themeId ? this.context : HIGLightTheme);
  }
}

const ThemeContext = { Provider, Consumer }

export default ThemeContext;
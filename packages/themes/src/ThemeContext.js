import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HIGLightTheme from './HIGLightTheme';

const themeContextShape = {
  /** Uniquely identifies a theme */
  themeId: PropTypes.string,
  /** A class added to each themed element */
  themeClass: PropTypes.string
}

class Provider extends Component {
  static propTypes = {
    /** A theme provided to the consumer within */
    value: PropTypes.shape(themeContextShape),
    /** Content within will be provided with the passed theme */
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
    /** A theme provided to the consumer within */
    children: PropTypes.func
  }

  static contextTypes = themeContextShape;

  render() {
    return this.props.children(this.context.themeId ? this.context : HIGLightTheme);
  }
}

const ThemeContext = { Provider, Consumer }

export default ThemeContext;
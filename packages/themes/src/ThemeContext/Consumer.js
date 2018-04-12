import React, { Component } from 'react';
import PropTypes from 'prop-types';
import themeContextShape from './shape';
import HIGLightTheme from "../themes/HIGLightTheme";

export default class Consumer extends Component {
  static propTypes = {
    /** A theme provided to the consumer within */
    children: PropTypes.func
  }

  static contextTypes = themeContextShape;

  render() {
    const theme = (this.context.themeId && this.context.themeClass) ? this.context : HIGLightTheme;
    return this.props.children(theme);
  }
}

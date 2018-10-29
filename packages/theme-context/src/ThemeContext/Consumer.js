import React, { Component } from "react";
import PropTypes from "prop-types";
import HIGLightTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

import { Consumer as BaseConsumer } from "./BaseContext";
import createThemeProxy from "./createThemeProxy";

export default class Consumer extends Component {
  static propTypes = {
    /** A theme provided to the consumer within */
    children: PropTypes.func
  };

  render() {
    return (
      <BaseConsumer>
        {value => {
          const theme = value.resolvedRoles ? value : HIGLightTheme;
          const isDebugging = process.env.NODE_ENV !== "production";
          const result = isDebugging ? createThemeProxy(theme) : theme;

          return this.props.children(result);
        }}
      </BaseConsumer>
    );
  }
}

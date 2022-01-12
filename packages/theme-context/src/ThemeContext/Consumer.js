import React, { Component } from "react";
import PropTypes from "prop-types";

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
        {theme => {
          const isDebugging = process.env.NODE_ENV !== "production";
          const result = isDebugging ? createThemeProxy(theme) : theme;

          return this.props.children(result);
        }}
      </BaseConsumer>
    );
  }
}

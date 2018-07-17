import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/themes";

import stylesheet from "./stylesheet";

class Label extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    htmlFor: PropTypes.string,
    form: PropTypes.string
  };

  render() {
    const { children, htmlFor, form, disabled } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ themeData }) => {
          const styles = stylesheet({ disabled }, themeData);

          return (
            <label htmlFor={htmlFor} form={form} style={styles.label}>
              {children}
            </label>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Label;

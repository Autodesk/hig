import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

class Label extends Component {
  static propTypes = {
    /**
     * Content of the label, including the label text
     */
    children: PropTypes.node,
    /**
     * Dims label text, signifying the related input or control is disabled
     */
    disabled: PropTypes.bool
  };

  render() {
    const { children, disabled, ...otherProps } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet({ disabled }, resolvedRoles);

          return (
            // eslint-disable-next-line jsx-a11y/label-has-for
            <label style={styles.label} {...otherProps}>
              {children}
            </label>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Label;

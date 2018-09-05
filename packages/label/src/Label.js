import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/themes";

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
    disabled: PropTypes.bool,
    /**
     * Reference to the HTML ID of the form element that this label represents
     */
    htmlFor: PropTypes.string,
    /**
     * Reference to the HTML ID of the form that contains this label
     */
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

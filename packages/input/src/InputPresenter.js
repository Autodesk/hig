import React from "react";
import { ThemeContext } from "@hig/themes";
import stylesheet from "./stylesheet";

export default function InputPresenter(props) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const styles = stylesheet(props, themeData);
        return (
          <input
            style={styles.input}
            value={this.props.value}
            disabled={this.props.disabled}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

import React from "react";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function SeparatorPresenter() {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(resolvedRoles);
        return (
          <div
            role="presentation"
            aria-hidden
            className={css(styles.topNavSeparator)}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

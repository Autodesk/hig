import React from "react";
import { css } from "emotion";
import { Caret24, CaretDownSUI } from "@hig/icons";
import Input from "@hig/input";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./InputPresenter.stylesheet";

export default function InputPresenter(props) {
  const { isOpen, ...otherProps } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const CaretIcon =
          metadata.densityId === "medium-density" ? Caret24 : CaretDownSUI;
        const iconColor = isOpen
          ? resolvedRoles["colorScheme.accentColor"]
          : resolvedRoles["colorScheme.iconColor"];

        return (
          <div className={css(stylesheet(props, resolvedRoles).wrapper)}>
            <Input
              {...otherProps}
              stylesheet={stylesheet(props, resolvedRoles).input}
              readOnly
            />
            <CaretIcon
              style={stylesheet(props, resolvedRoles).caret}
              color={iconColor}
            />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

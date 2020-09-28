import React from "react";
import { css } from "emotion";
import { CaretDownMUI, CaretDownSUI } from "@hig/icons";
import Input from "@hig/input";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./InputPresenter.stylesheet";

function customStylesheet(inputStylesheet, props, themeData) {
  const { variant } = props;
  return {
    ...inputStylesheet,
    input: {
      ...inputStylesheet.input,
      cursor: `pointer`,
      whiteSpace: `nowrap`,
      textOverflow: `ellipsis`,
      paddingRight:
        variant === `line`
          ? `calc(${themeData["density.spacings.large"]} + ${
              themeData["input.line.paddingHorizontal"]
            }px)`
          : `calc(${themeData["density.spacings.large"]} + ${
              themeData["input.box.paddingHorizontal"]
            })`
    }
  };
}

export default function InputPresenter(props) {
  const {
    isOpen,
    onChange,
    onInputChange,
    searchable,
    stylesheet: userStylesheet,
    ...otherProps
  } = props;
  const dropdownInputStylesheet = (styles, componentProps, themeData) => {
    const dropdownInputStyles = customStylesheet(
      styles,
      componentProps,
      themeData
    );
    return userStylesheet
      ? userStylesheet(dropdownInputStyles, componentProps, themeData)
      : dropdownInputStyles;
  };
  const handleChange = event => {
    onChange(event);

    if (onInputChange) {
      onInputChange(event);
    }
  };

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const CaretIcon =
          metadata.densityId === `medium-density` ? CaretDownMUI : CaretDownSUI;
        const iconColor = isOpen
          ? resolvedRoles[`colorScheme.indicator.on`]
          : resolvedRoles[`input.indicator.default`];

        return (
          <div className={css(stylesheet(props, resolvedRoles).inputWrapper)}>
            <Input
              {...otherProps}
              onChange={handleChange}
              readOnly={!searchable}
              stylesheet={dropdownInputStylesheet}
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

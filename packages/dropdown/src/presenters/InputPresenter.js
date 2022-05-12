import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { CaretDownMUI, CaretDownSUI } from "@hig/icons";
import Input from "@hig/input";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./InputPresenter.stylesheet";

function customStylesheet(inputStylesheet, props, themeData) {
  const { multiple, variant } = props;

  return {
    ...inputStylesheet,
    input: {
      ...inputStylesheet.input,
      cursor: `pointer`,
      whiteSpace: `nowrap`,
      textOverflow: `ellipsis`,
      fontStyle: multiple ? `italic` : {},
      paddingRight:
        variant === `line`
          ? `calc(${themeData["density.spacings.large"]} + ${themeData["input.line.paddingHorizontal"]}px)`
          : `calc(${themeData["density.spacings.large"]} + ${themeData["input.box.paddingHorizontal"]})`,
    },
  };
}

export default function InputPresenter(props) {
  const {
    isOpen,
    multiple,
    onChange,
    onInputChange,
    stylesheet: userStylesheet,
    typable,
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
  const handleChange = (event) => {
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
              multiple={multiple}
              onChange={handleChange}
              readOnly={!typable}
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

InputPresenter.propTypes = {
  isOpen: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  stylesheet: PropTypes.func,
  typable: PropTypes.bool,
};

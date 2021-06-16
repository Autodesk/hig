import React from "react";

import {
  CaretRightMUI,
  CaretRightSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI,
} from "@hig/icons";

export default function IconIndicatorPresenter(props) {
  const { collapsed, density, indicator } = props;
  const OperatorMinusIcon =
    density === "medium-density" ? OperatorMinusSUI : OperatorMinusXsUI;
  const OperatorPlusIcon =
    density === "medium-density" ? OperatorPlusSUI : OperatorPlusXsUI;
  const OperatorIcon = collapsed ? OperatorPlusIcon : OperatorMinusIcon;
  const CaretDownIcon =
    density === "medium-density" ? CaretRightMUI : CaretRightSUI;
  const IconIndicator = indicator === "operator" ? OperatorIcon : CaretDownIcon;
  const customStylesheet = (styles) => {
    return {
      ...styles,
      ...(!collapsed && indicator === `caret`
        ? { transform: `rotate(90deg)` }
        : {}),
      transition: `transform 0.3s ease-in-out`,
    };
  };

  return <IconIndicator stylesheet={customStylesheet} />;
}

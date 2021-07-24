import React from "react";
import PropTypes from "prop-types";

import {
  CaretRightMUI,
  CaretRightSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI
} from "@hig/icons";

export default function IconIndicatorPresenter(props) {
  const { collapsed, indicator, ...otherProps } = props;
  const { className, density } = otherProps;
  const OperatorMinusIcon =
    density === "medium-density" ? OperatorMinusSUI : OperatorMinusXsUI;
  const OperatorPlusIcon =
    density === "medium-density" ? OperatorPlusSUI : OperatorPlusXsUI;
  const OperatorIcon = collapsed ? OperatorPlusIcon : OperatorMinusIcon;
  const CaretDownIcon =
    density === "medium-density" ? CaretRightMUI : CaretRightSUI;
  const IconIndicator = indicator === "operator" ? OperatorIcon : CaretDownIcon;
  const customStylesheet = styles => ({
    ...styles,
    ...(!collapsed && indicator === `caret`
      ? { transform: `rotate(90deg)` }
      : {}),
    cursor: `pointer`,
    transition: `transform 0.3s ease-in-out`
  });

  return <IconIndicator stylesheet={customStylesheet} className={className} />;
}

IconIndicatorPresenter.propTypes = {
  collapsed: PropTypes.bool,
  indicator: PropTypes.string
};

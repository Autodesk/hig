import React from "react";
import Icon from "@hig/icon";
import { TextFieldPresenter } from "@hig/text-field";
import "@hig/icon/build/index.css";
import "@hig/text-field/build/index.css";

import "./Input.scss";

export default function Input(props) {
  return (
    <div className="hig__dropdown__input-wrapper">
      <TextFieldPresenter {...props} type="text" readOnly />
      <span className="hig__dropdown__input-caret">
        {/* @TODO: there are variations of the TextField with multiple icons at the end of the input. These icon nodes should be passed as props to TextField. */}
        <Icon name="caret" />
      </span>
    </div>
  );
}

Input.propTypes = {
  ...TextFieldPresenter.propTypes,
  type: undefined,
  readOnly: undefined
};

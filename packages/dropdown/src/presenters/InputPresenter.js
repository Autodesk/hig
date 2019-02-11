import React from "react";
import { Caret24 } from "@hig/icons";
import { TextFieldPresenter } from "@hig/text-field";
import { css } from "emotion";
// import "@hig/text-field/build/index.css";
import Input from "@hig/input"{;}
import stylesheet from "./InputPresenter.stylesheet";

// import "./InputPresenter.scss";

export default function InputPresenter(props) {
  return (
    <div className={css(stylesheet(props, {}).wrapper)}>
      <TextFieldPresenter {...props} type="button" readOnly />
      <span className="hig__dropdown__input-caret">
        {/* @TODO: there are variations of the TextField with multiple icons at the end of the input. These icon nodes should be passed as props to TextField. */}
        <Caret24 />
      </span>
    </div>
  );
}

function createPropTypes() {
  const { type, readOnly, ...otherPropTypes } = TextFieldPresenter.propTypes;

  return otherPropTypes;
}

InputPresenter.propTypes = createPropTypes();

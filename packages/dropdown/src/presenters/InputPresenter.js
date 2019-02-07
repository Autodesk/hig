import React from "react";
import { Caret24 } from "@hig/icons";
import { TextFieldPresenter } from "@hig/text-field";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import Input from "@hig/input";

import stylesheet from "./InputPresenter.stylesheet";

export default function InputPresenter(props) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div className={css(stylesheet(props, resolvedRoles).wrapper)}>
          <Input
            {...props}
            stylesheet={stylesheet(props, resolvedRoles).input}
            readOnly
          />
          <Caret24 style={stylesheet(props, resolvedRoles).caret} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

function createPropTypes() {
  const { type, readOnly, ...otherPropTypes } = TextFieldPresenter.propTypes;

  return otherPropTypes;
}

InputPresenter.propTypes = createPropTypes();

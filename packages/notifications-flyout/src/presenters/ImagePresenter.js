/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { css } from "emotion";

import stylesheet from "./stylesheet";

export default function ImagePresenter(props) {
  return <img className={css(stylesheet({}, {}).image)} {...props} />;
}

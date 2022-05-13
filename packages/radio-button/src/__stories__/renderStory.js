import React from "react";
import { css } from "emotion";
import Label from "@hig/label";
import Spacer from "@hig/spacer";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);
  const outerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5px",
  };

  return (
    <form>
      <div className={css(outerStyle)}>
        <DefaultExport {...otherProps} name="radio-button" id="radio-button-1">
          {children}
        </DefaultExport>
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-1">Radio Button 1</Label>
      </div>
      <div className={css(outerStyle)}>
        <DefaultExport
          {...otherProps}
          value="Secondary"
          id="radio-button-2"
          name="radio-button"
          defaultChecked
        >
          {children}
        </DefaultExport>
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-2">Radio Button 2</Label>
      </div>
      <div className={css(outerStyle)}>
        <DefaultExport
          {...otherProps}
          value="Tertiary"
          id="radio-button-3"
          name="radio-button"
        >
          {children}
        </DefaultExport>
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-3">Radio Button 3</Label>
      </div>
    </form>
  );
}

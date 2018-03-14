/* eslint-disable no-console */
import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { IconButton, NewIconButton } from "../../hig-react";

class IconButtonSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="IconButton">
        <IconButton
          type="flat"
          title="Icon button"
          link="#"
          icon="settings"
          onClick={() => {
            console.log("Button with icon on click");
          }}
          onBlur={() => {
            console.log("onblur");
          }}
          onFocus={() => {
            console.log("focus");
          }}
          onHover={() => {
            console.log("hover");
          }}
        />

        <IconButton
          disabled
          title="Icon button"
          link="#"
          icon="settings"
          type="primary"
          onClick={() => {
            console.log("Button with icon on click");
          }}
          onBlur={() => {
            console.log("onblur");
          }}
          onFocus={() => {
            console.log("focus");
          }}
          onHover={() => {
            console.log("hover");
          }}
        />

        <NewIconButton
          title="Icon button"
          link="#"
          icon="settings"
          type="transparent"
          onClick={() => {
            console.log("Button with icon on click");
          }}
          onBlur={() => {
            console.log("onblur");
          }}
          onFocus={() => {
            console.log("focus");
          }}
          onHover={() => {
            console.log("hover");
          }}
        />
      </PlaygroundSection>
    );
  }
}
export default IconButtonSection;

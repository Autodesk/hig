/* eslint-disable no-console */
import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { IconButton } from "../../hig-react";

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
          onLeave={() => {
            console.log("leave");
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
            console.log("will not happen as disabled - onblur");
          }}
          onFocus={() => {
            console.log("will not happen as disabled - focus");
          }}
          onHover={() => {
            console.log("will not happen as disabled - hover");
          }}
          onLeave={() => {
            console.log("will not happen as disabled - leave");
          }}
        />

        <IconButton
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
          onLeave={() => {
            console.log("leave");
          }}
        />
      </PlaygroundSection>
    );
  }
}
export default IconButtonSection;

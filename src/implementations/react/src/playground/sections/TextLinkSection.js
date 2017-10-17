/* eslint-disable no-console */
import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { TextLink } from "../../hig-react";

class TextLinkSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="TextLink">
        <div>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="This is a primary text link"
          />
        </div>
        <div>
          <TextLink
            text="This is a primary text link with onClick"
            onClick={() => {
              console.log("Text link on click");
            }}
          />
        </div>
        <div>
          <TextLink
            href="https://github.com/Autodesk/hig"
            type="secondary"
            text="This is a secondary text link"
          />
        </div>
      </PlaygroundSection>
    );
  }
}
export default TextLinkSection;

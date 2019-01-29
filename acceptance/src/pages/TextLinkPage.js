import React from "react";
import Spacer from "@hig/spacer";
import TextLink from "@hig/text-link";
import "@hig/fonts/build/ArtifaktElement.css";

import ThemeRepeater from "../components/ThemeRepeater";

function TextLinkPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <div>
            <TextLink onClick={(e) => {e.preventDefault()}} link="/">Text link</TextLink>
            <Spacer spacing="xxl" />
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default TextLinkPage;

import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";
import { COLOR_VARIANT_COUNT } from "../Avatar";
import { sizes } from "../sizes";

const storybook = storiesOf("Avatar", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider],
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});

// array of all possible Avatar background colors
storybook.add(
  "all background colors",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider],
  })(() => {
    const avatarArray = [];
    for (let i = 0; i < COLOR_VARIANT_COUNT; i += 1) {
      avatarArray.push(
        <div style={{ padding: "10px", height: "48px" }} key={i}>
          {renderStory({
            firstName: String.fromCharCode(105 + i), // calculates backgroundIdFromName() = 1 at start
            lastName: "",
            size: sizes.LARGE_48,
          })}
        </div>
      );
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>{avatarArray}</div>
    );
  })
);

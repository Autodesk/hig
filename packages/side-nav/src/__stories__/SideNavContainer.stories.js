import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { Docked, BelowTopNav } from "../index";
import ExampleSideNav from "./ExampleSideNav";
import infoOptions from "./infoOptions";

storiesOf("GlobalNav|SideNav/containers", module)
  .add(
    "Docked",
    withInfo({
      ...infoOptions,
      inline: false,
      propTablesExclude: [KnobbedThemeProvider]
    })(() => (
      <KnobbedThemeProvider>
        <div style={{ minHeight: "100vh" }}>
          <Docked
            onMouseEnter={action("Docked onMouseEnter")}
            onMouseLeave={action("Docked onMouseLeave")}
          >
            {ExampleSideNav()}
          </Docked>
        </div>
      </KnobbedThemeProvider>
    ))
  )

  .add(
    "BelowTopNav",
    withInfo({
      ...infoOptions,
      inline: false,
      propTablesExclude: [KnobbedThemeProvider]
    })(() => (
      <KnobbedThemeProvider>
        <BelowTopNav
          onMouseEnter={action("BelowTopNav onMouseEnter")}
          onMouseLeave={action("BelowTopNav onMouseLeave")}
        >
          {ExampleSideNav()}
        </BelowTopNav>
      </KnobbedThemeProvider>
    ))
  );

import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { Insight24, Collaboration24, ProductsAndServices24 } from "@hig/icons";
import SideNav, { BelowTopNavCompact } from "../index";
import infoOptions from "./infoOptions";

const compactSideNav = () => (
  <SideNav
    groups={
      <SideNav.Group>
        <SideNav.ModuleCompact
          title="Module 1"
          icon={<Insight24 />}
          activeChildren
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" active />
        </SideNav.ModuleCompact>
        <SideNav.ModuleCompact
          title="Module 2"
          icon={<ProductsAndServices24 />}
          minimized
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" />
        </SideNav.ModuleCompact>
        <SideNav.ModuleCompact
          title="Module 3"
          icon={<Collaboration24 />}
          link="https://www.autodesk.com"
          target="_blank"
        />
      </SideNav.Group>
    }
  />
);

storiesOf("GlobalNav|SideNav/SideNavCompact", module)
  .add(
    "SideNav with compact modules",
    withInfo({
      ...infoOptions,
      propTables: [SideNav.ModuleCompact],
      propTablesExclude: [KnobbedThemeProvider]
    })(() => <KnobbedThemeProvider>{compactSideNav()}</KnobbedThemeProvider>)
  )

  .add(
    "positioned below the TopNav",
    withInfo({
      ...infoOptions,
      inline: false,
      propTables: [SideNav.ModuleCompact],
      propTablesExclude: [KnobbedThemeProvider]
    })(() => (
      <KnobbedThemeProvider>
        <BelowTopNavCompact
          onMouseEnter={action("BelowTopNav onMouseEnter")}
          onMouseLeave={action("BelowTopNav onMouseLeave")}
        >
          {compactSideNav()}
        </BelowTopNavCompact>
      </KnobbedThemeProvider>
    ))
  );

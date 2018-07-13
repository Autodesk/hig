import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Icon, { names as iconNames } from "@hig/icon";
import SideNav, { BelowTopNavCompact } from "../index";
import infoOptions from "./infoOptions";

const compactSideNav = () => (
  <SideNav
    groups={
      <SideNav.Group>
        <SideNav.ModuleCompact
          title="Module 1"
          icon={<Icon name={iconNames.INSIGHT} />}
          activeChildren
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" active />
        </SideNav.ModuleCompact>
        <SideNav.ModuleCompact
          title="Module 2"
          icon={<Icon name={iconNames.PRODUCTS_AND_SERVICES} />}
          minimized
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" />
        </SideNav.ModuleCompact>
        <SideNav.ModuleCompact
          title="Module 3"
          icon={<Icon name={iconNames.COLLABORATION} />}
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

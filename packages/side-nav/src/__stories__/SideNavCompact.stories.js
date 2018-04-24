import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Icon, { names as iconNames } from "@hig/icon";
import SideNav, { BelowTopNav } from "../index";
import cubeIcon from "./cube.svg";

const compactSideNav = (
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
          icon={<Icon svg={cubeIcon} />}
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

storiesOf("SideNav/SideNavCompact", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "SideNav with compact modules",
    withInfo({ propTables: [SideNav.ModuleCompact] })(() => compactSideNav)
  )

  .add(
    "positioned below the TopNav",
    withInfo({ inline: false, propTables: [SideNav.ModuleCompact] })(() => (
      <BelowTopNav
        onMouseEnter={action("BelowTopNav onMouseEnter")}
        onMouseLeave={action("BelowTopNav onMouseLeave")}
      >
        {compactSideNav}
      </BelowTopNav>
    ))
  );

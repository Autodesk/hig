import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Icon, { names as iconNames } from "@hig/icon";

import SideNav, { Docked, BelowTopNav, BelowTopNavCompact } from "../index";
import cubeIcon from "./cube.svg";

const FullSideNav = (
  <SideNav
    headerLabel={text("Header Label", "Storybook")}
    headerLink={text("Header Link", "https://www.autodesk.com")}
    onMinimize={action("onMinimize")}
    showMinimizeButton={boolean("Show Minimize Button", false)}
    superHeaderLabel={text("Superheader Label", "HIG")}
    superHeaderLink={text("Superheader Link", "https://www.autodesk.com")}
    groups={
      <SideNav.Group>
        <SideNav.Module
          title="Module 1"
          icon={<Icon name={iconNames.INSIGHT} />}
          activeChildren
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" active />
        </SideNav.Module>
        <SideNav.Module
          title="Module 2"
          icon={<Icon svg={cubeIcon} />}
          minimized
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" />
        </SideNav.Module>
        <SideNav.Module
          title="Module 3"
          icon={<Icon name={iconNames.COLLABORATION} />}
          link="https://www.autodesk.com"
          target="_blank"
        />
      </SideNav.Group>
    }
    links={[
      <SideNav.Link
        key="Autodesk Home"
        title="Autodesk Home"
        link="https://www.autodesk.com"
      />,
      <SideNav.Link
        key="Github"
        title="Github"
        link="https://www.github.com/Autodesk/hig"
        target="_blank"
      />
    ]}
    copyright="© 2018 Autodesk Inc."
  />
);

storiesOf("SideNav/SideNav.CollapseButton", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "default",
    withInfo()(() => (
      <SideNav.CollapseButton
        onClick={action("onClick")}
        minimized={boolean("Minimized", false)}
      />
    ))
  );

storiesOf("SideNav/SideNav.Link", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "default",
    withInfo()(() => (
      <SideNav.Link
        onClick={action("onClick")}
        onMouseOver={action("onMouseOver")}
        title={text("Title", "SideNav Link")}
        link={text("Link", "https://www.autodesk.com")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
      />
    ))
  );

storiesOf("SideNav/SideNav.Submodule", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "default",
    withInfo()(() => (
      <SideNav.Submodule
        active={boolean("Active", true)}
        onClick={action("onClick")}
        onMouseOver={action("onMouseOver")}
        title={text("Title", "Submodule")}
        link={text("Link", "https://www.autodesk.com")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
      />
    ))
  );

storiesOf("SideNav/SideNav.Module", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "with icon",
    withInfo()(() => (
      <SideNav.Module
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        icon={<Icon name={iconNames.INSIGHT} />}
        link={text("Link", "https://www.autodesk.com")}
        minimized={boolean("Minimized", false)}
        onClick={action("onClick")}
        onMouseOver={action("onMouseOver")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
        title={text("Title", "Module")}
      />
    ))
  )
  .add(
    "without icon",
    withInfo()(() => (
      <SideNav.Module
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        link={text("Link", "https://www.autodesk.com")}
        minimized={boolean("Minimized", false)}
        onClick={action("onClick")}
        onMouseOver={action("onMouseOver")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
        title={text("Title", "Module")}
      />
    ))
  )
  .add(
    "with submodules",
    withInfo()(() => (
      <SideNav.Module
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        link={text("Link", "https://www.autodesk.com")}
        minimized={boolean("Minimized", false)}
        onClick={action("onClick")}
        onMouseOver={action("onMouseOver")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
        title={text("Title", "Module")}
      >
        <SideNav.Submodule title="Submodule 1" />
        <SideNav.Submodule title="Submodule 2" />
      </SideNav.Module>
    ))
  );

storiesOf("SideNav/SideNav.ModuleCompact", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "default",
    withInfo()(() => (
      <SideNav.ModuleCompact
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        icon={<Icon name={iconNames.INSIGHT} />}
        onClickTitle={action("onClick")}
        onMouseOver={action("onMouseOver")}
      />
    ))
  );

storiesOf("SideNav/SideNav.Group", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "with icons",
    withInfo({ source: true })(() => (
      <SideNav.Group>
        <SideNav.Module
          title="Module 1"
          icon={<Icon name={iconNames.INSIGHT} />}
          activeChildren
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" active />
        </SideNav.Module>
        <SideNav.Module
          title="Module 2"
          icon={<Icon svg={cubeIcon} />}
          minimized
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" />
        </SideNav.Module>
        <SideNav.Module
          title="Module 3"
          icon={<Icon name={iconNames.COLLABORATION} />}
          link="https://www.autodesk.com"
          target="_blank"
        />
      </SideNav.Group>
    ))
  )

  .add(
    "without icons",
    withInfo({ source: true })(() => (
      <SideNav.Group>
        <SideNav.Module title="Module 1" activeChildren>
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" active />
        </SideNav.Module>
        <SideNav.Module title="Module 2" minimized>
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" />
        </SideNav.Module>
        <SideNav.Module
          title="Module 3"
          link="https://www.autodesk.com"
          target="_blank"
        />
      </SideNav.Group>
    ))
  );

storiesOf("SideNav", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "with icons",
    withInfo({
      source: true,
      propTables: [
        SideNav.CollapseButton,
        SideNav.Group,
        SideNav.Link,
        SideNav.Module,
        SideNav.Submodule
      ]
    })(() => FullSideNav)
  );

storiesOf("SideNav/containers", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "Docked",
    withInfo({ inline: false })(() => (
      <Docked
        onMouseEnter={action("Docked onMouseEnter")}
        onMouseLeave={action("Docked onMouseLeave")}
      >
        {FullSideNav}
      </Docked>
    ))
  )

  .add(
    "BelowTopNav",
    withInfo({ inline: false })(() => (
      <BelowTopNav
        onMouseEnter={action("BelowTopNav onMouseEnter")}
        onMouseLeave={action("BelowTopNav onMouseLeave")}
      >
        {FullSideNav}
      </BelowTopNav>
    ))
  )

  .add(
    "BelowTopNavCompact",
    withInfo({ inline: false })(() => (
      <BelowTopNavCompact
        onMouseEnter={action("BelowTopNavCompact onMouseEnter")}
        onMouseLeave={action("BelowTopNavCompact onMouseLeave")}
      >
        {FullSideNav}
      </BelowTopNavCompact>
    ))
  );

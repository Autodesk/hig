import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import SideNav from "../presenters/SideNav";
import Docked from "../containers/Docked";

import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";
import CollapseButton from "../CollapseButton";
import Group from "../Group";
import Link from "../Link";
import Module from "../Module";
import Submodule from "../Submodule";

import cubeIcon from "./cube.svg";

storiesOf("SideNav/_CollapseButton", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "default",
    withInfo()(() => (
      <CollapseButton
        onClick={action("onClick")}
        minimized={boolean("Minimized", false)}
      />
    ))
  );

storiesOf("SideNav/_Link", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "default",
    withInfo()(() => (
      <Link
        onClick={action("onClick")}
        onHover={action("onHover")}
        title={text("Title", "SideNav Link")}
        link={text("Link", "https://www.autodesk.com")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
      />
    ))
  );

storiesOf("SideNav/_Submodule", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "default",
    withInfo()(() => (
      <Submodule
        active={boolean("Active", true)}
        onClick={action("onClick")}
        onHover={action("onHover")}
        title={text("Title", "Submodule")}
        link={text("Link", "https://www.autodesk.com")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
      />
    ))
  );

storiesOf("SideNav/_Module", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "with icon",
    withInfo()(() => (
      <Module
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        icon={<Icon name={iconNames.INSIGHT} size={iconSizes.PX_24} />}
        link={text("Link", "https://www.autodesk.com")}
        minimized={boolean("Minimized", false)}
        onClick={action("onClick")}
        onHover={action("onHover")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
        title={text("Title", "Module")}
      />
    ))
  )
  .add(
    "without icon",
    withInfo()(() => (
      <Module
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        link={text("Link", "https://www.autodesk.com")}
        minimized={boolean("Minimized", false)}
        onClick={action("onClick")}
        onHover={action("onHover")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
        title={text("Title", "Module")}
      />
    ))
  )
  .add(
    "with submodules",
    withInfo()(() => (
      <Module
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        link={text("Link", "https://www.autodesk.com")}
        minimized={boolean("Minimized", false)}
        onClick={action("onClick")}
        onHover={action("onHover")}
        target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
        title={text("Title", "Module")}
      >
        <Submodule title="Submodule 1" />
        <Submodule title="Submodule 2" />
      </Module>
    ))
  );

storiesOf("SideNav/_Group", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "with icons",
    withInfo({ source: true })(() => (
      <Group>
        <Module
          title="Module 1"
          icon={<Icon name={iconNames.INSIGHT} size={iconSizes.PX_24} />}
          activeChildren
        >
          <Submodule title="Submodule 1" />
          <Submodule title="Submodule 2" active />
        </Module>
        <Module
          title="Module 2"
          icon={<Icon svg={cubeIcon} size={iconSizes.PX_24} />}
          minimized
        >
          <Submodule title="Submodule 1" />
          <Submodule title="Submodule 2" />
        </Module>
        <Module
          title="Module 3"
          icon={<Icon name={iconNames.COLLABORATION} size={iconSizes.PX_24} />}
          link="https://www.autodesk.com"
          target="_blank"
        />
      </Group>
    ))
  )

  .add(
    "without icons",
    withInfo({ source: true })(() => (
      <Group>
        <Module
          title="Module 1"
          activeChildren
        >
          <Submodule title="Submodule 1" />
          <Submodule title="Submodule 2" active />
        </Module>
        <Module title="Module 2" minimized>
          <Submodule title="Submodule 1" />
          <Submodule title="Submodule 2" />
        </Module>
        <Module
          title="Module 3"
          link="https://www.autodesk.com"
          target="_blank"
        />
      </Group>
    ))
  );

storiesOf("SideNav/SideNav", module)
  .addDecorator(KnobbedThemeProvider)
  .add(
    "with icons",
    withInfo({ source: true, inline: false })(() => (
      <div>
        <Docked>
          <SideNav
            headerLabel={text("Header Label", "Storybook")}
            headerLink={text("Header Link", "https://www.autodesk.com")}
            onMinimize={action("onMinimize")}
            showMinimizeButton={boolean("Show Minimize Button", false)}
            superHeaderLabel={text("Superheader Label", "HIG")}
            superHeaderLink={text("Superheader Link", "https://www.autodesk.com")}
            groups={
              <Group>
                <Module
                  title="Module 1"
                  icon={<Icon name={iconNames.INSIGHT} size={iconSizes.PX_24} />}
                  activeChildren
                >
                  <Submodule title="Submodule 1" />
                  <Submodule title="Submodule 2" active />
                </Module>
                <Module
                  title="Module 2"
                  icon={<Icon svg={cubeIcon} size={iconSizes.PX_24} />}
                  minimized
                >
                  <Submodule title="Submodule 1" />
                  <Submodule title="Submodule 2" />
                </Module>
                <Module
                  title="Module 3"
                  icon={<Icon name={iconNames.COLLABORATION} size={iconSizes.PX_24} />}
                  link="https://www.autodesk.com"
                  target="_blank"
                />
              </Group>
            }
            links={[
              <Link
                key="Autodesk Home"
                title="Autodesk Home"
                link="https://www.autodesk.com"
              />,
              <Link
                key="Github"
                title="Github"
                link="https://www.github.com/Autodesk/hig"
                target="_blank"
              />
            ]}
            copyright="© 2018 Autodesk Inc."
          />
        </Docked>
      </div>
    ))
  );

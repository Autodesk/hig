import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

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
        <Module title="Module 2">
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

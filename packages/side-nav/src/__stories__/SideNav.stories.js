import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import CollapseButton from "../CollapseButton";
import Link from "../Link";
import Submodule from "../Submodule";

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

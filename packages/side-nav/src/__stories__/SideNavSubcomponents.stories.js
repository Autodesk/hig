import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { Insight24, ProductsAndServices24, Collaboration24 } from "@hig/icons";

import SideNav from "../index";
import infoOptions from "./infoOptions";
import { AVAILABLE_TARGETS } from "../targets";

storiesOf("GlobalNav|SideNav.CollapseButton", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <SideNav.CollapseButton
        onClick={action("onClick")}
        minimized={boolean("Minimized", false)}
      />
    </KnobbedThemeProvider>
  ))
);

storiesOf("GlobalNav|SideNav.Link", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <SideNav.Link
        onClick={action("onClick")}
        onFocus={action("onFocus")}
        onMouseOver={action("onMouseOver")}
        title={text("Title", "SideNav Link")}
        link={text("Link", "https://www.autodesk.com")}
        target={select("Link Target", AVAILABLE_TARGETS)}
      />
    </KnobbedThemeProvider>
  ))
);

storiesOf("GlobalNav|SideNav.Submodule", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <SideNav.Submodule
        active={boolean("Active", true)}
        onClick={action("onClick")}
        onFocus={action("onFocus")}
        onMouseOver={action("onMouseOver")}
        title={text("Title", "Submodule")}
        link={text("Link", "https://www.autodesk.com")}
        target={select("Link Target", AVAILABLE_TARGETS)}
      />
    </KnobbedThemeProvider>
  ))
);

storiesOf("GlobalNav|SideNav.Module", module)
  .add(
    "with icon",
    withInfo(infoOptions)(() => (
      <KnobbedThemeProvider>
        <SideNav.Module
          active={boolean("Active", true)}
          activeChildren={boolean("Active Children", false)}
          icon={<Insight24 />}
          link={text("Link", "https://www.autodesk.com")}
          minimized={boolean("Minimized", false)}
          onClickCollapseButton={action("onClickCollapseButton")}
          onClickTitle={action("onClickTitle")}
          onFocus={action("onFocus")}
          onMouseOver={action("onMouseOver")}
          target={select("Link Target", AVAILABLE_TARGETS)}
          title={text("Title", "Module")}
        />
      </KnobbedThemeProvider>
    ))
  )
  .add(
    "without icon",
    withInfo(infoOptions)(() => (
      <KnobbedThemeProvider>
        <SideNav.Module
          active={boolean("Active", true)}
          activeChildren={boolean("Active Children", false)}
          link={text("Link", "https://www.autodesk.com")}
          minimized={boolean("Minimized", false)}
          onClickCollapseButton={action("onClickCollapseButton")}
          onClickTitle={action("onClickTitle")}
          onFocus={action("onFocus")}
          onMouseOver={action("onMouseOver")}
          target={select("Link Target", AVAILABLE_TARGETS)}
          title={text("Title", "Module")}
        />
      </KnobbedThemeProvider>
    ))
  )
  .add(
    "with submodules",
    withInfo(infoOptions)(() => (
      <KnobbedThemeProvider>
        <SideNav.Module
          active={boolean("Active", true)}
          activeChildren={boolean("Active Children", false)}
          link={text("Link", "https://www.autodesk.com")}
          minimized={boolean("Minimized", false)}
          onClickCollapseButton={action("onClickCollapseButton")}
          onClickTitle={action("onClickTitle")}
          onFocus={action("onFocus")}
          onMouseOver={action("onMouseOver")}
          target={select("Link Target", AVAILABLE_TARGETS)}
          title={text("Title", "Module")}
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" />
        </SideNav.Module>
      </KnobbedThemeProvider>
    ))
  );

storiesOf("GlobalNav|SideNav.ModuleCompact", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <SideNav.ModuleCompact
        active={boolean("Active", true)}
        activeChildren={boolean("Active Children", false)}
        icon={<Insight24 />}
        onClickTitle={action("onClick")}
        onFocus={action("onFocus")}
        onMouseOver={action("onMouseOver")}
      />
    </KnobbedThemeProvider>
  ))
);

storiesOf("GlobalNav|SideNav.Group", module)
  .add(
    "with icons",
    withInfo({
      ...infoOptions,
      source: true
    })(() => (
      <KnobbedThemeProvider>
        <SideNav.Group>
          <SideNav.Module title="Module 1" icon={<Insight24 />} activeChildren>
            <SideNav.Submodule title="Submodule 1" />
            <SideNav.Submodule title="Submodule 2" active />
          </SideNav.Module>
          <SideNav.Module
            title="Module 2"
            icon={<ProductsAndServices24 />}
            minimized
          >
            <SideNav.Submodule title="Submodule 1" />
            <SideNav.Submodule title="Submodule 2" />
          </SideNav.Module>
          <SideNav.Module
            title="Module 3"
            icon={<Collaboration24 />}
            link="https://www.autodesk.com"
            target="_blank"
          />
        </SideNav.Group>
      </KnobbedThemeProvider>
    ))
  )

  .add(
    "without icons",
    withInfo({
      ...infoOptions,
      source: true
    })(() => (
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

storiesOf("GlobalNav|SideNav.Search", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <SideNav.Search
        onBlur={action("onBlur")}
        onClearIconClick={action("onClearIconClick")}
        onFocus={action("onFocus")}
        onInput={action("onInput")}
        placeholder={text("Placeholder")}
        value={text("Value")}
      />
    </KnobbedThemeProvider>
  ))
);

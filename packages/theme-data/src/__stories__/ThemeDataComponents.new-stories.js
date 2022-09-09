import React from "react";
import ThemeContext from "@hig/theme-context";

import stories from "./storiesSchema";
import Role from "./components/Role";
import lightGrayTheme from "../colorSchemes/lightGray/unresolvedRoles";
import darkBlueTheme from "../colorSchemes/darkBlue/unresolvedRoles";
import darkGrayTheme from "../colorSchemes/darkGray/unresolvedRoles";
import basics from "../basics";

const themeConfigs = {
  "hig-light-gray": lightGrayTheme,
  "hig-dark-blue": darkBlueTheme,
  "hig-dark-gray": darkGrayTheme,
};

export default {
  title: "ThemeData/Tokens/Components",
  argTypes: {
    schema: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};

const Template = (args) => (
  <ThemeContext.Consumer>
    {({ resolvedRoles, metadata }) => (
      <div>
        {Object.keys(stories.components[args.schema]).map((role) => (
          <Role
            key={role}
            role={role}
            schema={stories.components[args.schema][role]}
            theme={resolvedRoles}
            themeConfig={themeConfigs[metadata.colorSchemeId]}
            basics={basics}
          />
        ))}
      </div>
    )}
  </ThemeContext.Consumer>
);

export const Default = Template.bind({});

Default.args = { schema: "accordion" };
Default.storyName = "Accordion";

export const Avatar = Template.bind({});

Avatar.args = { schema: "avatar" };

export const AvatarBundle = Template.bind({});

AvatarBundle.args = { schema: "avatarBundle" };

export const Badge = Template.bind({});

Badge.args = { schema: "badge" };

export const Banner = Template.bind({});

Banner.args = { schema: "banner" };

export const Breadcrumb = Template.bind({});

Breadcrumb.args = { schema: "breadcrumb" };

export const Button = Template.bind({});

Button.args = { schema: "button" };

export const CanvasFrame = Template.bind({});

CanvasFrame.args = { schema: "canvasFrame" };

export const Checkbox = Template.bind({});

Checkbox.args = { schema: "checkbox" };

export const DataVisualization = Template.bind({});

DataVisualization.args = { schema: "dataVis" };

export const DatePicker = Template.bind({});

DatePicker.args = { schema: "datePicker" };

export const Divider = Template.bind({});

Divider.args = { schema: "divider" };

export const EmptyState = Template.bind({});

EmptyState.args = { schema: "emptyState" };

export const Flyout = Template.bind({});

Flyout.args = { schema: "flyout" };

export const IconButton = Template.bind({});

IconButton.args = { schema: "iconButton" };

export const Input = Template.bind({});

export const Illustration = Template.bind({});

Illustration.args = { schema: "illustration" };

Input.args = { schema: "input" };

export const Label = Template.bind({});

Label.args = { schema: "label" };

export const Menu = Template.bind({});

Menu.args = { schema: "menu" };

export const Modal = Template.bind({});

Modal.args = { schema: "modal" };

export const Notifications = Template.bind({});

Notifications.args = { schema: "notifications" };

export const Panel = Template.bind({});

Panel.args = { schema: "panel" };

export const ProgressBar = Template.bind({});

ProgressBar.args = { schema: "progressBar" };

export const ProgressRing = Template.bind({});

ProgressRing.args = { schema: "progressRing" };

export const Scrollbar = Template.bind({});

Scrollbar.args = { schema: "scrollbar" };

export const SideNav = Template.bind({});

SideNav.args = { schema: "sideNav" };

export const SkeletonItem = Template.bind({});

SkeletonItem.args = { schema: "skeletonItem" };

export const Slider = Template.bind({});

Slider.args = { schema: "slider" };

export const StepIndicator = Template.bind({});

StepIndicator.args = { schema: "stepIndicator" };

export const Table = Template.bind({});

Table.args = { schema: "table" };

export const Tabs = Template.bind({});

Tabs.args = { schema: "tabs" };

export const Tag = Template.bind({});

Tag.args = { schema: "tag" };

export const TextArea = Template.bind({});

TextArea.args = { schema: "textArea" };

export const TextLink = Template.bind({});

TextLink.args = { schema: "textLink" };

export const Thumbnail = Template.bind({});

Thumbnail.args = { schema: "thumbnail" };

export const Tile = Template.bind({});

Tile.args = { schema: "tile" };

export const Timestamp = Template.bind({});

Timestamp.args = { schema: "timestamp" };

export const Toggle = Template.bind({});

Toggle.args = { schema: "toggle" };

export const Token = Template.bind({});

Token.args = { schema: "token" };

export const Tooltip = Template.bind({});

Tooltip.args = { schema: "tooltip" };

export const TopNav = Template.bind({});

TopNav.args = { schema: "topNav" };

export const TreeView = Template.bind({});

TreeView.args = { schema: "treeView" };

export const Typography = Template.bind({});

Typography.args = { schema: "typography" };

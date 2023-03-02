import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import Button, { types } from "@weave-design/button";
import RichText from "@weave-design/rich-text";
import { Dashboard16, Dashboard24, Settings16, Settings24 } from "@weave-design/icons";

import Tabs, { Tab } from "../index";
import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_VARIANTS,
  AVAILABLE_ORIENTATIONS,
  alignments,
  orientations,
  variants,
} from "../constants";
import Readme from "../../README.md";

export default {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: { Tab },
  argTypes: {
    variant: {
      options: AVAILABLE_VARIANTS,
      control: "select",
    },
    orientation: {
      options: AVAILABLE_ORIENTATIONS,
      control: "select",
    },
    alignment: {
      options: AVAILABLE_ALIGNMENTS,
      control: "select",
    },
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Stories />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};
const renderCustomTab = ({ key, label, active, handleClick }) => (
  <Button
    key={key}
    title={label}
    type={active ? types.PRIMARY : types.SECONDARY}
    onClick={handleClick}
  />
);
const defaultChildren = [
  <Tab label="Details" key="details">
    <RichText>Details content</RichText>
  </Tab>,
  <Tab label="Activities" key="activities">
    <RichText>Activities content</RichText>
  </Tab>,
  <Tab label="Inspector" key="inspector">
    <RichText>Inspector content</RichText>
  </Tab>,
];

const customTabsChildren = [
  <Tab label="Details" key="details" render={renderCustomTab}>
    <RichText>Details content</RichText>
  </Tab>,
  <Tab label="Activities" key="activities" render={renderCustomTab} active>
    <RichText>Activities content</RichText>
  </Tab>,
  <Tab label="Inspector" key="inspector" render={renderCustomTab}>
    <RichText>Inspector content</RichText>
  </Tab>,
];

const Template = (args, context) => {
  const Settings =
    context.globals.density === "Medium density" ? Settings24 : Settings16;
  const Dashboard =
    context.globals.density === "Medium density" ? Dashboard24 : Dashboard16;
  const complexTabsChildren = [
    <Tab label="Complex" key="complex" icon={<Settings />} closable>
      <RichText>
        Complex tab can have an icon and a close button, complex tab only works
        when variant is set to &quot;box&quot; or &quot;canvas&quot;
      </RichText>
    </Tab>,
    <Tab key="icon" icon={<Dashboard />}>
      <RichText>
        Icon only tab. Icon will not be displayed when variant is set to
        &quot;underline&quot;
      </RichText>
    </Tab>,
    <Tab label="Disabled" key="disabled" disabled>
      <RichText>Disabled</RichText>
    </Tab>,
    <Tab label="Closable" key="closable" closable>
      <RichText>
        Closable tab will only works when variant is set to &quot;box&quot; or
        &quot;canvas&quot;. Clicks the close button will trigger the
        &quot;onTabClose&quot; event.
      </RichText>
    </Tab>,
  ];

  if (context.story === "Complex tabs") {
    return <Tabs {...args}>{complexTabsChildren}</Tabs>;
  }

  return <Tabs {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  alignment: alignments.LEFT,
  variant: variants.UNDERLINE,
  orientation: orientations.HORIZONTAL,
  showDivider: false,
  children: defaultChildren,
};

export const ComplexTabs = Template.bind({});

ComplexTabs.storyName = "Complex tabs";
ComplexTabs.args = {
  alignment: alignments.LEFT,
  variant: variants.BOX,
  orientation: orientations.HORIZONTAL,
  showDivider: true,
  defaultActiveTabIndex: 1,
};

export const CustomTabs = Template.bind({});

CustomTabs.storyName = "Custom tabs";
CustomTabs.args = {
  align: "center",
  children: customTabsChildren,
};

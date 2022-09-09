import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import TextLink from "@hig/text-link";
import Timestamp from "@hig/timestamp";

import { Notification, types, AVAILABLE_TYPES } from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/NotificationsFlyout/Notification",
  component: Notification,
  argTypes: {
    type: {
      options: AVAILABLE_TYPES,
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
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const notificationChildren = [
  <div>
    <p>
      <b>Your subscription expires May 5</b>
    </p>
    <p>
      Maya
      <br />
      Media &amp; Entertainment Collection
      <br />
      Product Design Collection
      <br />2 more
    </p>
    <p>
      <TextLink link="https://github.com/Autodesk/hig">Manage renewal</TextLink>
    </p>
  </div>,
];

const Template = (args) => <Notification id="1" {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: notificationChildren,
  timestamp: <Timestamp timestamp={new Date().toISOString()} />,
  type: types.PRIMARY,
  unread: true,
};

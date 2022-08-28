import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { css } from "emotion";
import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";

import NotificationsFlyout, { Notification } from "../index";
import Readme from "../../README.md";
import createSampleNotifications from "../__fixtures__/createSampleNotifications";

export default {
  title: "Components/NotificationsFlyout",
  component: NotificationsFlyout,
  subcomponents: { Notification },
  argTypes: {
    anchorPoint: {
      options: AVAILABLE_ANCHOR_POINTS,
      control: { type: "select" },
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

const defaults = {
  heading: "Notifications",
  indicatorTitle: "View notifications",
};

const NotificationsFlyoutLayout = ({ children }) => (
  <div
    className={css({
      display: "flex",
      paddingBottom: "500px",
      alignItems: "center",
      justifyContent: "center",
    })}
  >
    {children}
  </div>
);

const Template = (args, context) => (
  <NotificationsFlyoutLayout>
    <NotificationsFlyout
      {...args}
      key={`${context.globals.colorScheme}-${context.globals.density}`}
    />
  </NotificationsFlyoutLayout>
);

export const Default = Template.bind({});

Default.args = {
  anchorPoint: anchorPoints.TOP_CENTER,
  notifications: createSampleNotifications(),
  heading: defaults.heading,
  indicatorTitle: defaults.indicatorTitle,
};

export const Empty = Template.bind({});

Empty.args = {
  anchorPoint: anchorPoints.TOP_CENTER,
};

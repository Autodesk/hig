import React, { useState } from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { css } from "emotion";
import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
import { generateId } from "@hig/utils";
import Button from "@hig/button";
import TextLink from "@hig/text-link";
import Typography from "@hig/typography";

import NotificationsFlyout, { Notification } from "../index";
import Readme from "../../README.md";
import createSampleNotifications from "../__fixtures__/createSampleNotifications";

export default {
  title: "Components/Notifications flyout",
  component: NotificationsFlyout,
  subcomponents: { Notification },
  argTypes: {
    anchorPoint: {
      options: AVAILABLE_ANCHOR_POINTS,
      control: "select",
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

const createNotification = () => ({
  id: generateId("notification"),
  type: "primary",
  content: (
    <div>
      <p>
        You have 4 new seats of <b>Product Design Collection</b> subscription,
        switched from <b>Building Design Suite Premium</b> subscription.
      </p>
      <p>
        <TextLink>Learn how to switch</TextLink>
        &ensp;
        <Typography
          elementType="span"
          className={css({ display: "inline-block" })}
        >
          or
        </Typography>
        &ensp;
        <TextLink type="secondary">Assign users</TextLink>
      </p>
    </div>
  ),
});

const Template = (args, context) => {
  const [notifications, setNotifications] = useState([]);
  const handleButtonClick = () =>
    setNotifications([createNotification(), ...notifications]);

  if (context.story === "Dynamically add Notifications") {
    return (
      <NotificationsFlyoutLayout>
        <Button onClick={handleButtonClick}>Add notification</Button>
        <div className={css({ width: "50px" })} />
        <NotificationsFlyout
          {...args}
          notifications={notifications}
          key={`${context.globals.colorScheme}-${context.globals.density}`}
        />
      </NotificationsFlyoutLayout>
    );
  }
  return (
    <NotificationsFlyoutLayout>
      <NotificationsFlyout
        {...args}
        key={`${context.globals.colorScheme}-${context.globals.density}`}
      />
    </NotificationsFlyoutLayout>
  );
};

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

export const DynamicallyAddNotifciations = Template.bind({});

DynamicallyAddNotifciations.storyName = "Dynamically add notifications";
DynamicallyAddNotifciations.args = { ...Empty.args };

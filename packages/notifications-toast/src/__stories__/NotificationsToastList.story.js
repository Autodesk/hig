import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import Avatar from "@hig/avatar";
import avatar from "@weave-design/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";

import NotificationsToast, { NotificationsToastList } from "../index";
import { AVAILABLE_PLACEMENTS } from "../NotificationsToastList/index";
import Readme from "../../README.md";
import NotificationsToastListInteractions from "./NotificationsToastListInteractions";

export default {
  title: "Components/Notifications toast/Toast list",
  component: NotificationsToastList,
  subcomponents: { NotificationsToast },
  argTypes: {
    children: {
      control: false,
    },
    placement: {
      control: "select",
      options: AVAILABLE_PLACEMENTS,
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

const exampleToasts = React.Children.toArray([
  <NotificationsToast status="primary">
    <strong>Object Name</strong> was the first Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast status="warning">
    <strong>Object Name</strong> was the second Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast
    image={<Avatar name="Arya Stark" size="large" image={avatar} />}
    status="error"
  >
    <strong>Object Name</strong> was the third Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast>
    <strong>Object Name</strong> is last.
  </NotificationsToast>,
]);

const Template = (args, context) => {
  if (context.story === "Dynamically add NotificationToasts") {
    return <NotificationsToastListInteractions {...args} />;
  }
  return (
    <NotificationsToastList {...args}>{exampleToasts}</NotificationsToastList>
  );
};

export const Default = Template.bind({});

Default.storyName = "Static";
Default.args = {
  placement: "top",
};

export const Dynamic = Template.bind({});

Dynamic.storyName = "Dynamically add notification toasts";

Dynamic.args = {
  ...Default.args,
};

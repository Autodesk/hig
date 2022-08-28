import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import Avatar from "@hig/avatar";
import avatar from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import greenhouseThumbnail from "@hig/storybook/storybook-support/fixtures/thumbnail/greenhouse.png";

import { css } from "emotion";
import NotificationsToast from "../index";
import { AVAILABLE_STATUSES } from "../statuses";
import Readme from "../../README.md";

export default {
  title: "Components/NotificationsToast",
  component: NotificationsToast,
  argTypes: {
    children: {
      control: false,
    },
    image: {
      control: false,
    },
    status: {
      control: "select",
      options: AVAILABLE_STATUSES,
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

const Template = (args) => <NotificationsToast {...args} />;

export const Default = Template.bind({});

Default.args = {
  onDismissTitle: "Dismiss",
  status: "primary",
  showStatusIcon: true,
  children: [
    <>
      <strong>Object Name</strong> has new info about it.
    </>,
  ],
};

export const WithAvatar = Template.bind({});

WithAvatar.args = {
  ...Default.args,
  image: <Avatar name="Jon Snow" size="large" image={avatar} />,
};

export const WithImage = Template.bind({});

const Image = () => (
  <div className={css({ width: "48px", height: "48px" })}>
    <img
      src={greenhouseThumbnail}
      className={css({ borderRadius: "4px" })} // To be replaced eventually by a Thumbnail component
      alt="greenhouse"
    />
  </div>
);

WithImage.args = {
  ...Default.args,
  image: <Image />,
};

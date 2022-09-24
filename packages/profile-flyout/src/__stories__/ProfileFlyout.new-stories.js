import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import avatarImagePath from "@weave-design/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";

import ProfileFlyout, { ProfileContent } from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy Components/ProfileFlyout",
  component: ProfileFlyout,
  subcomponents: { ProfileContent },
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

const renderProfileContent = () => (
  <ProfileContent
    profileName="David Gonzalez"
    profileEmail="gonzalezd@autodesk.com"
  >
    <p>Child content can go here.</p>
  </ProfileContent>
);

const Template = (args, context) => (
  <ProfileFlyout
    {...args}
    key={`${context.globals.colorScheme}-${context.globals.density}`}
  />
);

export const Default = Template.bind({});

Default.args = {
  children: renderProfileContent(),
  avatarImage: avatarImagePath,
  avatarName: "David Gonzalez",
};

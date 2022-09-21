import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Tile from "../index";
// import { availableTargets } from "../targets";
import Readme from "../../README.md";

export default {
  title: "Components/Tile",
  component: Tile,
  // argTypes: {
  //   target: {
  //     options: availableTargets,
  //     control: "select",
  //   },
  //   children: {
  //     control: "text",
  //   },
  // },
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

const Template = (args) => <Tile {...args} />;

export const Default = Template.bind({});

Default.args = {
  // children: "This is a primary text link",
  // link: "https://github.com/Autodesk/hig",
};

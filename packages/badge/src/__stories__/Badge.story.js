import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { Error12, Error16 } from "@hig/icons";

import Badge from "../index";
import Readme from "../../README.md";
import { COLORS, SIZES, VARIANTS } from "../constants";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: [
        COLORS.green,
        COLORS.orange,
        COLORS.yellow,
        COLORS.red,
        COLORS.custom,
      ],
      control: { type: "select" },
    },
    size: {
      options: [SIZES.l, SIZES.s],
      control: { type: "select" },
    },
    variant: {
      options: [VARIANTS.dot, VARIANTS.icon, VARIANTS.text],
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

const Template = (args) => {
  const ErrorIcon = args?.size === "l" ? Error16 : Error12;
  const payload = {
    icon: <ErrorIcon />,
    ...args,
  };

  return <Badge {...payload} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Badge",
};

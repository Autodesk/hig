import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { Settings16, Settings24 } from "@hig/icons";
import Surface from "@hig/surface";

import IconButton from "../index";
import Readme from "../../README.md";
import { AVAILABLE_SURFACES, AVAILABLE_VARIANTS } from "../constants";

export default {
  title: "Components/Icon button",
  component: IconButton,
  argTypes: {
    variant: {
      options: AVAILABLE_VARIANTS,
      control: { type: "select" },
    },
    surface: {
      options: AVAILABLE_SURFACES,
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

const Static16 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      // eslint-disable-next-line max-len
      d="M14.5,1H.5a.5.5,0,0,0,0,1H1v9H5.33L3.22,13.92a.5.5,0,1,0,.81.59L6.56,11H7v3.38a.57.57,0,0,0,.5.62.57.57,0,0,0,.5-.62V11h.44L11,14.51a.5.5,0,1,0,.81-.59L9.67,11H14V2h.5a.5.5,0,0,0,0-1ZM13,10H2V2H13Z"
      fill="#faa21b"
    />
    <rect x="3" y="3" width="9" height="6" fill="#faa21b" />
  </svg>
);

const Static24 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      // eslint-disable-next-line max-len
      d="M19.5,4H3.5a.5.5,0,0,0,0,1H4V17H9.33L7.22,19.92a.49.49,0,0,0,0,.7A.51.51,0,0,0,8,20.57l0-.07L10.56,17H11v3.38a.57.57,0,0,0,.5.63.57.57,0,0,0,.5-.62V17h.44L15,20.51a.5.5,0,0,0,.81-.58L13.67,17H19V5h.5a.5.5,0,0,0,0-1ZM18,16H5V5H18Z"
      fill="#faa21b"
    />
    <rect x="12" y="8" width="5" height="1" fill="#faa21b" />
    <rect x="12" y="10" width="5" height="1" fill="#faa21b" />
    <rect x="12" y="12" width="4" height="1" fill="#faa21b" />
    <path
      d="M8.5,8A2.5,2.5,0,1,0,11,10.5,2.5,2.5,0,0,0,8.5,8Zm0,4A1.5,1.5,0,1,1,10,10.5,1.5,1.5,0,0,1,8.5,12Z"
      fill="#faa21b"
    />
  </svg>
);

const Template = (args, context) => {
  const getIconByDensity = (highDensityIcon, mediumDensity) =>
    context.globals.density === "High density"
      ? highDensityIcon
      : mediumDensity;

  const Icon =
    args.variant === "dynamic"
      ? getIconByDensity(Settings16, Settings24)
      : getIconByDensity(Static16, Static24);
  const surfaceStylesheet = (styles) => ({
    ...styles,
    surface: {
      ...styles.surface,
      height: "300px",
      padding: "20px",
    },
  });

  return (
    <Surface level={args.surface} stylesheet={surfaceStylesheet}>
      <IconButton {...args} icon={<Icon />} />
    </Surface>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "Icon Title Attribute",
  variant: "dynamic",
};

Default.storyName = "Dynamic icon";

export const StaticIcon = Template.bind({});

StaticIcon.args = {
  ...Default.args,
  variant: "static",
};
StaticIcon.storyName = "Static icon";

import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import Surface from "@hig/surface";

import SideNav, { BelowTopNavCompact, Docked } from "../index";
import ExampleSideNav from "./ExampleSideNav";
import Readme from "../../README.md";

export default {
  title: "Legacy components/Side nav/Container",
  component: SideNav,
  subcomponents: {
    BelowTopNavCompact,
    Docked,
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

const customSurfaceStylesheet = (styles) => ({
  ...styles,
  surface: {
    ...styles.surface,
    height: "100%",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  },
});

const Template = () => (
  <Surface level={100} stylesheet={customSurfaceStylesheet}>
    <Docked>{ExampleSideNav()}</Docked>
  </Surface>
);

export const Default = Template.bind({});

Default.storyName = "Docked";

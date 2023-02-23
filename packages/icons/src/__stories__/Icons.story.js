import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Typography from "@weave-design/typography";

import * as Icons from "../index";
import { sizes } from "../sizes";
import Readme from "../../README.md";

const Wrapper = ({ children }) => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };
  return <div style={styles}>{children}</div>;
};

const InnerWrapper = ({ children }) => (
  <div
    style={{
      paddingRight: "5px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "250px",
      marginBottom: "8px",
    }}
  >
    {children}
  </div>
);

const Spacer = () => <div style={{ width: "8px" }} />;

const IconStory = ({ size, color }) => {
  const set = Icons.sets.find((isonSet) => isonSet.size === size);

  return (
    <Wrapper>
      {set.iconNames.map((name) => {
        const Icon = Icons[`${name}${size}`];

        return (
          <InnerWrapper key={name}>
            <Icon key={name} color={color} />
            <Spacer />
            <Typography type="body">{`${name}${size}`}</Typography>
          </InnerWrapper>
        );
      })}
    </Wrapper>
  );
};

export default {
  title: "Basics/Icons",
  component: Icons,
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    color: {
      control: "color",
      description: "The icon color",
      type: {
        name: "string",
      },
      table: {
        type: {
          summary: "string",
        },
      },
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
      source: {
        code: `<IconName color={color} />`,
        language: "js",
      },
    },
  },
};

const Template = (args) => {
  const { children } = args;
  return <IconStory {...args}>{children}</IconStory>;
};

export const Default = Template.bind({});

Default.storyName = "24";
Default.args = {
  color: "",
  size: sizes.PX_24,
};

export const Sixteen = Template.bind({});

Sixteen.storyName = "16";
Sixteen.args = {
  color: "",
  size: sizes.PX_16,
};

export const Twelve = Template.bind({});

Twelve.storyName = "12";
Twelve.args = {
  color: "",
  size: sizes.PX_12,
};

export const UI = Template.bind({});

UI.storyName = "UI";
UI.args = {
  color: "",
  size: sizes.PX_UI,
};

import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Typography from "@hig/typography";

import * as Icons from "../index";
import { sizes } from "../sizes";
import Readme from "../../README.md";
console.log(Icons);
const Wrapper = ({ children }) => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };
  return <div style={styles}>{children}</div>;
};

const InnerWrapper = ({ children }) => {
  return (
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
};

const Spacer = () => {
  return (
    <div
      style={{
        width: "8px",
      }}
    />
  );
};
  
const IconStory = ({ size, color }) => {
  const set = Icons.sets.find((isonSet) => isonSet.size === size);

  return (
    <Wrapper>
      {set.iconNames.map((name) => {
        const Icon = Icons[`${name}${size}`];
        console.log(Icon);
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
  argTypes: {},
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
  const { children } = args;
  return <IconStory {...args}>{children}</IconStory>;
}

export const Default = Template.bind({});

Default.args = {
  color: "#000",
  size: sizes.PX_16,
};

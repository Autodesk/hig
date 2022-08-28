import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import RichText from "../index";
import Readme from "../../README.md";

export default {
  title: "Basics/RichText",
  component: RichText,
  argTypes: {
    children: {
      control: false,
    },
    dangerouslySetInnerHTML: {
      control: false,
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

const Template = (args) => <RichText {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <div>
      <h1>Heading</h1>
      <p>
        The RichText component lets me include any React children, including:
      </p>
      <a href="https://autodesk.com">Anchors</a>
      <ul key="ul">
        <li>
          <strong>Any old HTML tag</strong>
        </li>
        <li>React components</li>
      </ul>
      <b>Bolded text</b>
    </div>,
  ],
};

export const SetHtml = Template.bind({});

SetHtml.storyName = "Dangerounsly setting inner HTML";

SetHtml.args = {
  dangerouslySetInnerHTML: {
    __html: "<p>RichText works with HTML strings too.</p>",
  },
};

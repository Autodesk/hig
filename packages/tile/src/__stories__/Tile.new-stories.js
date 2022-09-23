import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Surface from "@hig/surface";
import Thumbnail from "@hig/thumbnail";

import Tile from "../index";
// import { availableTargets } from "../targets";
import Readme from "../../README.md";

const Media = ({ orientation }) => {
  const aspectRatio = orientation === "vertical"
    ? "widescreen"
    : "square";
  const customStylesheet = (styles) => {
    return {
      ...styles,
      thumbnail: {
        ...styles.thumbnail,
        wrapper: {
          ...styles.thumbnail.wrapper,
          borderRadius: 0,
        },
      },
    };
  };
console.log('media');
  return (
    <Thumbnail
      aspectRatio={aspectRatio}
      fit="cover"
      size="l"
      src="https://2v7smn27y3922e05obea523d-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/champion-spider-ham.jpg"
      stylesheet={customStylesheet}
    />
  );
};

export default {
  title: "Components/Tile",
  component: Tile,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    background: {
      options: ["empty", "filled"],
      control: "select",
    },
    surface: {
      options: [100, 200, 250, 300, 350],
      control: "select",
    },
    // children: {
    //   control: "text",
    // },
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

const Template = (args, context) => {
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
      <Tile {...args} media={<Media orientation={args.orientation} />} />
    </Surface>
  );
};

export const Default = Template.bind({});

Default.args = {
  background: "filled",
  orientation: "vertical",
  subtitle: "Subtitle",
  surface: 100,
  title: "Title",
  // children: "This is a primary text link",
  // link: "https://github.com/Autodesk/hig",
};

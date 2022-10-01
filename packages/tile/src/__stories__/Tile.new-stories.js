import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Surface from "@hig/surface";
import Thumbnail from "@hig/thumbnail";
import thumbnailImagePath from "@hig/storybook/storybook-support/fixtures/thumbnail/thumbnail-placeholder-02.jpg";

import Tile, {
  AVAILABLE_BACKGROUNDS,
  AVAILABLE_LEVELS,
  AVAILABLE_ORIENTATIONS,
} from "../index";
import Readme from "../../README.md";

const Media = ({ orientation }) => {
  const aspectRatio = orientation === "vertical" ? "widescreen" : "square";
  const customStylesheet = (styles) => ({
    ...styles,
    thumbnail: {
      ...styles.thumbnail,
      wrapper: {
        ...styles.thumbnail.wrapper,
        borderRadius: 0,
      },
      border: {
        boxShadow: "none",
      },
    },
  });

  return (
    <Thumbnail
      aspectRatio={aspectRatio}
      fit="cover"
      size="l"
      src={thumbnailImagePath}
      stylesheet={customStylesheet}
    />
  );
};

export default {
  title: "Components/Tile",
  component: Tile,
  argTypes: {
    orientation: {
      options: AVAILABLE_ORIENTATIONS,
      control: "select",
    },
    background: {
      options: AVAILABLE_BACKGROUNDS,
      control: "select",
    },
    surface: {
      options: AVAILABLE_LEVELS,
      control: "select",
    },
    media: {
      control: false,
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
      <Tile
        {...args}
        media={<Media orientation={args.orientation} />}
      />
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
};

import React, { useState } from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { css } from "emotion";
import Button from "@hig/button";

import Banner from "../index";
import Readme from "../../README.md";
import { AVAILABLE_TYPES, types } from "../types";
import { AVAILABLE_PLACEMENTS, placements } from "../placements";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    type: {
      options: AVAILABLE_TYPES,
      control: "select",
    },
    placement: {
      options: AVAILABLE_PLACEMENTS,
      control: "select",
    },
    isVisible: {
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

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(true);
  const verticalPositionProperty =
    args.placement === placements.BELOW_OVERLAY ? "bottom" : "top";
  const bannerWrapperStyles = {
    position: "fixed",
    left: "0",
    right: "0",
    [verticalPositionProperty]: "0",
  };

  return (
    <>
      <div className={css(bannerWrapperStyles)}>
        <Banner
          {...args}
          isVisible={isVisible}
          onDismiss={() => setIsVisible(false)}
        />
      </div>
      {!isVisible && (
        <Button onClick={() => setIsVisible(true)}>Show Banner</Button>
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: "Banner text",
};

export const VerboseWithInteractions = Template.bind({});

VerboseWithInteractions.storyName = "Verbose with Interactions";
VerboseWithInteractions.args = {
  type: types.WARNING,
  children:
    "PROCESS COMPLETE: Changes have been made to you document. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  dismissButtonTitle: "Close",
  // eslint-disable-next-line react/prop-types
  actions: ({ isWrappingActions }) => (
    <Banner.Interactions isWrappingActions={isWrappingActions}>
      <Banner.Action>
        <Button
          type="secondary"
          size="small"
          width={isWrappingActions ? "grow" : "shrink"}
        >
          Resolve text
        </Button>
      </Banner.Action>
      <Banner.Action>
        <Button
          type="secondary"
          size="small"
          width={isWrappingActions ? "grow" : "shrink"}
        >
          Reject text
        </Button>
      </Banner.Action>
    </Banner.Interactions>
  ),
};

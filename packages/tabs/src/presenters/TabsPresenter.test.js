import React from "react";
import renderer from "react-test-renderer";

import TabsPresenter from "./TabsPresenter";
import { alignments, variants, orientations } from "../constants";

describe("tabs/TabsPresenter", () => {
  const cases = [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders horizontal box style tabs",
      props: {
        align: alignments.CENTER,
        variant: variants.BOX,
        children: "Hello World",
      },
    },
    {
      description: "renders horizontal canvas style tabs",
      props: {
        variant: variants.CANVAS,
        children: "Hello World",
      },
    },
    {
      description: "renders vertical box style tabs",
      props: {
        orientation: orientations.VERTICAL,
        children: "Hello World",
      },
    },
  ];

  cases.forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const wrapper = <TabsPresenter {...otherProps}>{children}</TabsPresenter>;
      const tree = renderer.create(wrapper).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

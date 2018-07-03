import React from "react";
import renderer from "react-test-renderer";

import TabsPresenter from "./TabsPresenter";
import { alignments } from "../alignments";

describe("tabs/TabsPresenter", () => {
  const cases = [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        align: alignments.CENTER,
        children: "Hello World"
      }
    },
    {
      description: "renders aligned left",
      props: {
        align: alignments.LEFT
      }
    },
    {
      description: "renders aligned right",
      props: {
        align: alignments.RIGHT
      }
    }
  ];

  cases.forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const wrapper = <TabsPresenter {...otherProps}>{children}</TabsPresenter>;
      const tree = renderer.create(wrapper).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

import React from "react";
import renderer from "react-test-renderer";

import { placements } from "../placements";
import { types } from "../types";
import BannerPresenter from "./index";

describe("Banner/BannerPresenter", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with a label",
      props: {
        type: types.ERROR,
        label: "HELLO",
        message: "World"
      }
    },
    {
      description: "renders with a string as children",
      props: {
        placement: placements.TOP,
        children: "foobar"
      }
    },
    {
      description: "renders with a node as children",
      props: {
        dismissButtonTitle: "boom",
        children: <span>foo</span>
      }
    },
    {
      description: "renders with a fragment as children",
      props: {
        children: [<span key="0">bar</span>, <div key="1">baz</div>]
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <BannerPresenter {...otherProps}>{children}</BannerPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

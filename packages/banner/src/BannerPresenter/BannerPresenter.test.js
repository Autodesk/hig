import React from "react";
import renderer from "react-test-renderer";

import { types } from "../types";
import BannerPresenter from "./BannerPresenter";

describe("banner/BannerPresenter/BannerPresenter", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with a label",
      props: {
        type: types.URGENT,
        label: "HELLO",
        children: "World"
      }
    },
    {
      description: "renders with a string as actions",
      props: {
        actions: "foobar"
      }
    },
    {
      description: "renders with a node as actions",
      props: {
        dismissButtonTitle: "boom",
        actions: <span>foo</span>
      }
    },
    {
      description: "renders with a fragment as actions",
      props: {
        actions: [<span key="0">bar</span>, <div key="1">baz</div>]
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

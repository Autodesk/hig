import React from "react";
import renderer from "react-test-renderer";
import Button from "@hig/button";

import { anchorPoints } from "./anchorPoints";
import Flyout from "./Flyout";

describe("flyout/Flyout", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        anchorPoint: anchorPoints.TOP_CENTER,
        children: <Button title="Hello" />,
        content: "World",
        maxHeight: 150,
        onClickOutside: function onClickOutside() {},
        onScroll: function onScroll() {},
        open: true
      }
    },
    {
      description: "renders children from the given render function",
      props: {
        children: ({ handleClick }) => (
          <Button onClick={handleClick} title="Render prop" />
        )
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = <Flyout {...otherProps}>{children}</Flyout>;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

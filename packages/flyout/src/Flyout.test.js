import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import Button from "@hig/button";

import { anchorPoints } from "./anchorPoints";
import Flyout from "./Flyout";

const FakeComponent = ({ handleClick }) => (
  <Button onClick={handleClick} title="Render prop" />
);

FakeComponent.propTypes = {
  handleClick: PropTypes.func
};

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
        children: FakeComponent
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

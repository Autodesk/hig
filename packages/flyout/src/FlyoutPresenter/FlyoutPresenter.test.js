import React from "react";
import renderer from "react-test-renderer";
import Button from "@hig/button";
import { ENTERED } from "react-transition-group/Transition";

import { anchorPoints } from "../anchorPoints";
import FlyoutPresenter from "./FlyoutPresenter";

describe("flyout/FlyoutPresenter/FlyoutPresenter", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders without size prop",
      props: {
        anchorPoint: anchorPoints.TOP_CENTER,
        content: "World",
        maxHeight: 150,
        topOffset: 42,
        leftOffset: 42,
        refAction: function refAction() {},
        refContainer: function refContainer() {},
        refPanel: function refPanel() {},
        refWrapper: function refWrapper() {},
        onScroll: function onScroll() {},
        transitionStatus: ENTERED,
        children: <Button title="Hello" />
      }
    },
    {
      description: "renders with all props",
      props: {
        anchorPoint: anchorPoints.TOP_CENTER,
        content: "World",
        maxHeight: 150,
        size: 'medium',
        topOffset: 42,
        leftOffset: 42,
        refAction: function refAction() {},
        refContainer: function refContainer() {},
        refPanel: function refPanel() {},
        refWrapper: function refWrapper() {},
        onScroll: function onScroll() {},
        transitionStatus: ENTERED,
        children: <Button title="Hello" />
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <FlyoutPresenter {...otherProps}>{children}</FlyoutPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

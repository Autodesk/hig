import React from "react";
import renderer from "react-test-renderer";
import Button from "@hig/button";

import { transitionStatuses } from "../transitionStatuses";
import { anchorPoints } from "../anchorPoints";
import FlyoutPresenter from "./FlyoutPresenter";

describe("flyout/FlyoutPresenter/FlyoutPresenter", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        anchorPoint: anchorPoints.TOP_CENTER,
        content: "World",
        maxHeight: 150,
        refAction: function refAction() {},
        refContainer: function refContainer() {},
        refPanel: function refPanel() {},
        refPanelWrapper: function refPanelWrapper() {},
        refWrapper: function refWrapper() {},
        onScroll: function onScroll() {},
        transitionStatus: transitionStatuses.ENTERED,
        pointer: <div>I am a custom pointer</div>,
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
